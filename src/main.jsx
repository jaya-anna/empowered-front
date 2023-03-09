import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SessionContextProvider from "./contexts/SessionContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <SessionContextProvider>
          <App />
        </SessionContextProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
