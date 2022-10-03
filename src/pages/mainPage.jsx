import { Routes, Route } from "react-router-dom";
import { Projectlist } from "./projects/projectList";
import { About } from "./about/about";
import { NavAppPage } from "./projects/navApp/NavAppPage";
import { CollatzPage } from "./projects/collatz/collatzPage";
import { Home } from "./home/home";

const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectlist" element={<Projectlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/navapppage" element={<NavAppPage />} />
        <Route path="/collatzpage" element={<CollatzPage />} />
      </Routes>
    </div>
  );
};

export { MainPage };
