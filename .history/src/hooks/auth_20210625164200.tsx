import React, 

{ 
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

import * as AuthSession from 'expo-auth-session';

import {
  SCOPE,
  CLIENT_ID,
  CDN_IMAGE,
  REDIRECT_URI,
  RESPONSE_TYPE
} from '../configs';

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

type AuthorizationResponse = AuthSessionResult & {
  params: {
    code: string;
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

      const authUrl = "https://discord.com/api/oauth2/authorize?client_id=857673773818183720&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40d4k37%2Ftonyplay&response_type=code&scope=identify%20email%20connections%20guilds"

      const { type, params } = await AuthSession
      .startAsync({ authUrl }) as AuthorizationResponse;
      // const authSession = await AuthSession
      // .startAsync({ authUrl })
      //const { type, params } = authSession as AuthorizationResponse
      //console.log(authSession)
      if(type === "success"){ 
        //const { type, params } = authSession as AuthorizationResponse
        console.log(params)
        api.defaults.headers.authorization = `Bearer ${params.code}`;

        const userInfo = await api.get('/users/@me');

        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
       
        setUser({
          ...userInfo.data,
          firstName,
          token: "nYB3pLugfxXSX5vMkISHONjjsQoSHR"
        });
        setLoading(false);
      }else{
        setLoading(false);
      }
    } catch(error) {
      console.log(error)
         Alert.alert(JSON.stringify("Não foi possível autenticar"));
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