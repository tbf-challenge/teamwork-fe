/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";
import { GeneralProvider } from "./context/GeneralContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </GeneralProvider>
    </BrowserRouter>
  </React.StrictMode>
);
