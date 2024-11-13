import "../src/dist/styles.css";
import Home from "./pages/homepage";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        
      </Routes>
    </>
  );
}

export default App;
