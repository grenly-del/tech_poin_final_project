import "../src/dist/styles.css";
import Home from "./pages/homepage";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
