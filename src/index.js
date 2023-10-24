import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AppContextProvider } from "./Contexts/Appcontext";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export const AppContext = createContext();
root.render(
  <StrictMode>
    <AppContextProvider>
      <Router>
        <App />
      </Router>
    </AppContextProvider>
  </StrictMode>
);
