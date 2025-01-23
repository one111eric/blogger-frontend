import React, { useState, createContext } from "react";
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from "styled-components";

export const themes = {
  light: {
    backgroundColor: "#fff",
    textColor: "#333",
    primaryColor: "#007bff",
  },
  dark: {
    backgroundColor: "#181818",
    textColor: "#fff",
    primaryColor: "#009688",
  },
};

// Create the ThemeContext
export const ThemeContext = createContext();

// Global styles
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};