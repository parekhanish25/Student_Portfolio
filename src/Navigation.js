import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Components/Portfolio/Navbar/App";
import ThemeProtfolio from "./Components/Portfolio/Portfolio";
import ProtfolioPage from "./Components/Portfolio/landingPage";
import Form from "./Components/Portfolio/form/form";
function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ThemeProtfolio>
                <ProtfolioPage />
              </ThemeProtfolio>
            }
          ></Route>
          <Route
            path="/Portfolio/:id"
            element={
              <ThemeProtfolio>
                <ProtfolioPage />
              </ThemeProtfolio>
            }
          ></Route>
          <Route path="/Form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Navigation;