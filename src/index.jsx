import React from "react";
import { createRoot } from "react-dom/client";

// import style
import "./styles/style.css";
import NotePage from "./pages/note";

const root = createRoot(document.getElementById("root"));
root.render(<NotePage />);
