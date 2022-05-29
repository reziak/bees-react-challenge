import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppProviders } from "./AppProviders";

import { Breweries } from "./pages/Breweries";
import { SignIn } from "./pages/SignIn";

export const App = () => {
  return (
    <BrowserRouter>
      <AppProviders>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/breweries" element={<Breweries />} />
        </Routes>
      </AppProviders>
    </BrowserRouter>
  );
}
