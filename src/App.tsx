import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Breweries } from "./pages/Breweries";
import { SignIn } from "./pages/SignIn";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/breweries" element={<Breweries />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
