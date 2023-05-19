import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Experient from "./pages/Experient";
import Contact from "./pages/Contact";
import Slider from "./pages/SliderShow";
import Map from "./pages/MapPage";

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pl-4">
      <div className="md:col-span-1 ">
        <Navbar />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-4 h-screen py-[4%] pr-[2%]  ">
        <div className="py-4 bg-[#eae8db]  h-full rounded-r-xl shadow-xl shadow-gray-500 ">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/experient" element={<Experient />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
