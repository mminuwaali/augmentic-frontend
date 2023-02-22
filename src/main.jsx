import "./index.css";
import React from "react";
import Routes from "./routes";
import { createRoot } from "react-dom/client";

createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
);
