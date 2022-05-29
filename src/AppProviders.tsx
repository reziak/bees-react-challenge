import { ReactNode } from "react"
import { CookiesProvider } from "react-cookie"
import { AuthContextProvider } from "./contexts/AuthContext"

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <AuthContextProvider>
      <CookiesProvider>
        {children}
      </CookiesProvider>
    </AuthContextProvider>

  )
}