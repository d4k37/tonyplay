import React, 
       {createContext,
        useContext,
        useState, 
        ReactNode
        } 
from 'react'

import {
    SCOPE,
    CLIENT_ID,
    CDN_IMAGE,
    REDIRECT_URI,
    RESPONSE_TYPE
} from '../configs'

import * as AuthSession from  'expo-auth-session'

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
}

type AuthProviderProps={
    children: ReactNode,
}

export const AuthContext =  createContext({} as AuthcontextData);

function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)

    function SignIn(){
        try{
            setLoading(true)

            const authUrl = "https://discord.com/api/oauth2/authorize?client_id=857673773818183720&redirect_uri=https%3A%2F%2Fauth.expo.io%2Ftonyplay&response_type=code&scope=identify%20email%20connections%20guilds"

            AuthSession
            .startAsync({authUrl })

        } catch (error){

        }
    }

    return(
        <AuthContext.Provider value={{
            user
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