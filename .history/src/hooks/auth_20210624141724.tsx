import React, 
       {createContext,
        useContext,
        useState, 
        ReactNode
        } 
from 'react'

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

}