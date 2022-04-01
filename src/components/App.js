import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`

  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script'
  }
`;
// add variables inside the theme. Injects all these styles as props to the styled components
const theme = {
primaryColor: "#f8049c",
secondaryColor: "#fdd54f"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
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
