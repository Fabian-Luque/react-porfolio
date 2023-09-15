import "@fontsource/inter";
import "@fontsource/poppins";
import "@/locales/i18n-config.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme.js";
import { FirebaseApp } from "./utils/firebase.js";

FirebaseApp.init();
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
