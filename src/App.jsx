import "../src/dist/styles.css";
import Home from "./pages/homepage";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Models from "./pages/Models";
import TestimonialsPage from "./pages/TestimonialsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
      </Routes>
    </>
  );
}

export default App;
