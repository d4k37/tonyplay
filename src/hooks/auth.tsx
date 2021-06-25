


import React, 
<<<<<<< HEAD
{ 
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

import * as AuthSession from 'expo-auth-session';
=======
       {createContext,
        useContext,
        useState, 
        ReactNode
        } 
from 'react'
>>>>>>> parent of 1efeb53 (up)

import {
  SCOPE,
  CLIENT_ID,
  CDN_IMAGE,
  REDIRECT_URI,
  RESPONSE_TYPE
} from '../configs';

import { api } from '../services/api';

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

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  }
}

<<<<<<< HEAD
export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);
=======
export const AuthContext =  createContext({} as AuthcontextData);

function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)

   async function signIn(){
        try{
            setLoading(true)

            const authUrl = "https://discord.com/api/oauth2/authorize?client_id=857673773818183720&redirect_uri=https%3A%2F%2Fauth.expo.io%2Ftonyplay&response_type=code&scope=identify%20email%20connections%20guilds"
            
          
            

          const {type, params} =  await AuthSession.startAsync({authUrl }) as AuthorizationResponse

          if(type === "success"){
              api.defaults.headers.authorization = `Bearer ${params.access_token}`
              const userInfo = await api.get('/users/@me')
              const firstName = userInfo.data.username.split('')[0]
              userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

              setUser({
                  ...userInfo.data,
                  firstName,
                  token: params.access_token,
              })
            setLoading(false)
          } else{ setLoading(false)}

        } catch {
            throw new Error('Não foi possível')
        }
    }
>>>>>>> parent of 1efeb53 (up)

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = "https://discord.com/api/oauth2/authorize?client_id=857673773818183720&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40d4k37%2Ftonyplay&response_type=code&scope=identify%20email%20connections%20guilds"

      const { type, params } = await AuthSession
      .startAsync({ authUrl }) as AuthorizationResponse;

      if(type === "success"){ 
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');

        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
       
        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token
        });
        setLoading(false);
      }else{
        setLoading(false);
      }
    } catch {
      throw new Error('Não foi possível autenticar');
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