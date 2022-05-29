import { createContext, ReactNode, useState } from "react";

interface AuthContextProviderProps {
  children: ReactNode;
}

type AuthContextType = {
  user: string;
  setUser: (user: string) => void;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<string>('');

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}