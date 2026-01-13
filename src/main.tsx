import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import MentionsLegales from "./MentionsLegales";
import NotFound from "./404";
import "./index.css";
import Admin from "./admin";
import Contact from "./contact";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  </React.StrictMode>
);
