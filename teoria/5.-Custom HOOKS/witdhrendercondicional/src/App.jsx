import "./App.css";
import H1 from "./components/H1";
import useResize from "./hooks/useResize";

const App = () => {
  const { ancho } = useResize();

  return <>{ancho > 600 && <H1 />}</>;
};

export default App;
