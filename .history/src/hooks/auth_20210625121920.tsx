import React, 
       {createContext,
        useContext,
        useState, 
        ReactNode,
        
        } 
from 'react'
import {useNavigation} from '@react-navigation/native'

import {
    SCOPE,
    CLIENT_ID,
    CDN_IMAGE,
    REDIRECT_URI,
    RESPONSE_TYPE
} from '../configs'

import * as AuthSession from  'expo-auth-session'
import { api } from '../services/api'

type User={
    id: string,
    username: string,
    firstName: string,
    avatar: string,
    email: string,
    token: string,
}


type AuthcontextData={
    user: User,
    loading: boolean,
    signIn: () => Promise<void>,
}

type AuthProviderProps={
    children: ReactNode,
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token: string,
    }
}

export const AuthContext =  createContext({} as AuthcontextData);

function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)
    

   async function signIn(){
        try{
            setLoading(true)

            const authUrl = "https://discord.com/api/oauth2/authorize?client_id=857673773818183720&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40anonymous%2Ftonyplay-7367a2f8-e411-4e00-8e38-fffdc78fbce7&response_type=code&scope=identify%20email%20connections%20guilds"
            
            
            

          const {type, params} =  await AuthSession.startAsync({authUrl }) as AuthorizationResponse
          console.log(type);
          console.log(params);
          
          

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

    return(
        <AuthContext.Provider value={{
            user,
            loading,
            signIn
        }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context= useContext(AuthContext)
    return context;
}

export{
    AuthProvider,
    useAuth
}