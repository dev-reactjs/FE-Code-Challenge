import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./container/landingPage";
import Description from "./container/description";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./component/header";
import { darkTheme, lightTheme } from "./MuiTheme";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");

  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;

  const onChangeMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };


  return (
    <BrowserRouter>
      <ThemeProvider theme={selectedTheme}>
        <Header mode={mode} setMode={() => onChangeMode()} />
        <Routes>
          <Route  path="/" element={<LandingPage />} />
          <Route  path="/country-discription" element={<Description />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
