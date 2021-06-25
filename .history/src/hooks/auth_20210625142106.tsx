
import React, {
    createContext,
    useContext,
    useState,
    ReactNode
  } from 'react';
  import * as AuthSession from 'expo-auth-session';

  import { api } from '../services/api';
  
  type User = {
    id: string;
    userName: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
  }
  
  type AuthContextData = {
    user: User;
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
  
  export const AuthContext = createContext({} as AuthContextData);
  
  function AuthProvider({children}:AuthProviderProps){
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false)
    const authUrl = "https://discord.com/api/oauth2/authorize?client_id=857673773818183720&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40d4k37%2Ftonyplay&response_type=code&scope=identify%20email%20connections%20guilds"
    console.log(authUrl)
    async function signIn(){
      try {
        setLoading(true);
        const response = await AuthSession.startAsync({ authUrl })
        
      } catch {
        throw new Error('Não foi possivel autenticar.');
      }
    }
  
    return (
      <AuthContext.Provider value={{
        user,
        signIn
      }}>
        {children}
      </AuthContext.Provider>
    )
  }
  
  function useAuth(){
    const context = useContext(AuthContext);
    return context;
  }
  
  export {
    AuthProvider,
    useAuth, 
  }