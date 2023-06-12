import "./App.css";

import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import useCloudinary from "./hooks/useCloudinary";
import useRequest from "./hooks/useRequest";

const App = () => {
  const URLanime = "https://anime-dik0dvppl-pedroleni.vercel.app/api/v1/anime";
  const URLmanga = "https://anime-dik0dvppl-pedroleni.vercel.app/api/v1/manga";
  const { urlIMG } = useCloudinary();
  const url = urlIMG;
  const requestAnime = useRequest(URLanime);
  const requestManga = useRequest(URLmanga);
  return (
    <div className="App">
      <h1 className="titulo tituloWhite">FRIKI PAGE</h1>
      <Nav />
      <Outlet context={[requestAnime, requestManga, url]} />
    </div>
  );
};

export default App;
