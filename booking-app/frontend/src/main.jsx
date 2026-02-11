import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./main.scss";

const entryPoint = document.getElementById("root");
ReactDom.createRoot(entryPoint).render(<App />);
