import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Container, createTheme, NextUIProvider } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <Container lg css={{ p: "0", maxW: "1200px" }}>
        <App />
      </Container>
    </NextUIProvider>
  </React.StrictMode>
);
