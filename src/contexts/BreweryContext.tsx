import { createContext, ReactNode, useState } from "react";

export type BreweryTags = {
  breweryType: string;
  postalCode: string;
  phone: string;
  userAdded: string | null;
}

export type Brewery = {
  id: string;
  name: string;
  street: string | null;
  city: string;
  state: string;
  country: string;
  tags: BreweryTags;
}

interface BreweryContextProviderProps {
  children: ReactNode;
}

type BreweryContextType = {
  breweries: Brewery[];
  setBreweries: (breweries: Brewery[]) => void;
}

export const BreweryContext = createContext({} as BreweryContextType);

export const BreweryContextProvider = ({ children }: BreweryContextProviderProps) => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  return (
    <BreweryContext.Provider value={{breweries, setBreweries}}>
      {children}
    </BreweryContext.Provider>
  )
}