import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./styles/font.css";
// import {AuthProvider} from "./AuthContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <App />
    )
;