import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./app/store";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </Provider>
);
