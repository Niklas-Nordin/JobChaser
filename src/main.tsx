import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SearchBar from "./Search.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="h1">The JobChaser</h1>
    <SearchBar />
    <App />
  </StrictMode>
);
