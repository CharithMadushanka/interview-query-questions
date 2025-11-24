import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { QuestionsProvider } from "./contexts/QuestionsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuestionsProvider>
        <App />
      </QuestionsProvider>
    </ThemeProvider>
  </StrictMode>
);
