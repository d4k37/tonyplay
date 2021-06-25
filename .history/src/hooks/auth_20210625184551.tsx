import React, 

{ 
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

import * as AuthSession from 'expo-auth-session';

 const {SCOPE} = process.env
 const  {CLIENT_ID} = process.env
 const {CDN_IMAGE} = process.env
 const  {REDIRECT_URI} = process.env
 const {RESPONSE_TYPE} = process.env


import { api } from '../services/api';
import { Alert } from 'react-native';


type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

type AuthSessionResult = {
  type: 'error' | 'success';
  errorCode: string | null;
  error?: AuthSession.AuthError | null;
  params: {
      [key: string]: string;
  };
  authentication: AuthSession.TokenResponse | null;
  url: string;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}



type DiscordParams = {
  code: string
}


export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = await AuthSession
      .startAsync({ authUrl }) as AuthorizationResponse;

      if(type === "success"&& !params.error){ 

        //const params = authSession.params as Dis
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');

        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
       
        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token
        });
      }
    } catch(error) {
      console.log(error)
         Alert.alert(JSON.stringify("Não foi possível autenticar"));
    } finally{
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}