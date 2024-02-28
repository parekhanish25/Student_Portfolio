// App.js
import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../Theme/theme";

const ThemeProtfolio = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProtfolio;
