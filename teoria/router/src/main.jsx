import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Gallery from "./pages/Gallery.jsx";
import Home from "./pages/Home.jsx";
import Nofound from "./pages/Nofound.jsx";
import Protected from "./components/Protected.jsx";
import CardId from "./components/CardId.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/gallery"
            element={
              <Protected>
                <Gallery />
              </Protected>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery/character/:id" element={<CardId />} />
          <Route path="*" element={<Nofound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
