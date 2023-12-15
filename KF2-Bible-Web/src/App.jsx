import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Calculator from "./components/Calculator/Calculator";
import "./styles/reset.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  // TODO:
  // apply a stylesheet and remove instances of style={}
  // move stuff around
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
