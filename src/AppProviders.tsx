import { ReactNode } from "react"
import { CookiesProvider } from "react-cookie"

import { AuthContextProvider } from "./contexts/AuthContext"
import { BreweryContextProvider } from "./contexts/BreweryContext";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <AuthContextProvider>
      <BreweryContextProvider>
        <CookiesProvider>
          {children}
        </CookiesProvider>
      </BreweryContextProvider>
    </AuthContextProvider>

  )
}