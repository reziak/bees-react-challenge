import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Breweries } from "./pages/Breweries";
import { SignIn } from "./pages/SignIn";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/breweries" element={<Breweries />} />
      </Routes>
    </BrowserRouter>
  );
}
