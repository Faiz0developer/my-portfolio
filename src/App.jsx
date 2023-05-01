import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
