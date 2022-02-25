import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./style/global";

import Login from "./pages/login/login";

function App() {

  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
