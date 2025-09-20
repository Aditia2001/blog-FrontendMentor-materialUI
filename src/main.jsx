import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import GlobalStyles from "@mui/material/GlobalStyles";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {/* <GlobalStyles styles={{ body: { backgroundColor: "#F4D04E" } }} /> */}
      <GlobalStyles
        styles={(theme) => ({
          body: { backgroundColor: theme.warnaku.kuning },
        })}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
