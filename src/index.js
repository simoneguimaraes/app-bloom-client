import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/themeContext";
ReactDOM.render(
  <React.StrictMode>
<ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
