import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Protected from "./components/Protected";
import { UserContextProvider } from "./Contexts/UserContext";
import Anime from "./pages/Anime";
import AnimeDetail from "./pages/AnimeDetail";
import Home from "./pages/Home";
import Manga from "./pages/Manga";
import MangaDetail from "./pages/MangaDetail";
import Page404 from "./pages/Page404";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="/anime"
              element={
                <Protected>
                  <Anime />
                </Protected>
              }
            />
            <Route
              path="/manga"
              element={
                <Protected>
                  <Manga />
                </Protected>
              }
            />
            <Route
              path="/anime/:id"
              element={
                <Protected>
                  <AnimeDetail />
                </Protected>
              }
            />
            <Route
              path="/manga/:id"
              element={
                <Protected>
                  <MangaDetail />
                </Protected>
              }
            />
            <Route path="/*" element={<Page404 />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
