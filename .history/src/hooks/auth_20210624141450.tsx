import React, 
       {createContext,
        useContext,
        useState
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

export const AuthContext =  createContext({});