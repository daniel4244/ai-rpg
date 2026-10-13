import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import App from "./app";

//aqui é o main, que é o ponto de entrada da aplicação. Ele chama o App, que é o componente raiz da aplicação.
//O seu CSS contem as cores e a fonte principal da aplicação como um todo

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
