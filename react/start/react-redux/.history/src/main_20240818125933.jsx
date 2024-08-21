import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider>
            <App />
        </Provider>
    </StrictMode>
);
