import "./App.css";

import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import useCloudinary from "./hooks/useCloudinary";
import useRequest from "./hooks/useRequest";

const App = () => {
  const URLanime = import.meta.env.VITE_APP_ANIME;
  const URLmanga = import.meta.env.VITE_APP_MANGA;
  const { urlIMG } = useCloudinary();
  const url = urlIMG;
  const requestAnime = useRequest(URLanime);
  const requestManga = useRequest(URLmanga);
  return (
    <div className="App">
      <h1 className="titulo">FRIKI PAGE</h1>
      <Nav />
      <Outlet context={[requestAnime, requestManga, url]} />
    </div>
  );
};

export default App;
