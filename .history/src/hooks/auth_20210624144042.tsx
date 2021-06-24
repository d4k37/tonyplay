import React, 
       {createContext,
        useContext,
        useState, 
        ReactNode
        } 
from 'react'

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