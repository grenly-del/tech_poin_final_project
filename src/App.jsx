import "../src/dist/styles.css";
import Home from "./pages/homepage";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Models from "./pages/Models";
import TestimonialsPage from "./pages/TestimonialsPage";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
