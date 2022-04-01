import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LightTheme from "themes/light"
import DarktTheme from "themes/dark"
import { useState } from "react";

const GlobalStyle = createGlobalStyle`

  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script'
  }
`;


function App() {

  const [theme, setTheme] = useState(LightTheme)
  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(currentState => currentState.id === "light" ? DarktTheme : LightTheme)
    }}}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <Login />} />
           
          
          <Route path="/" element={ <Home />} />
          
          
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
