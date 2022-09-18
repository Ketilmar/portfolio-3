import { Routes, Route } from "react-router-dom";
import { Projectlist } from "./projects/projectList";
import { TopMenu } from "../components/top-menu";
import { About } from "./about/about";
import { hideMenu } from "../components/elementHider";
import { NavAppPage } from "./projects/navApp/NavAppPage";
import { CollatzPage } from "./projects/collatz/collatzPage";

const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
      <TopMenu />
      <Routes>
        <Route path="/projectlist" element={<Projectlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/navapppage" element={<NavAppPage />} />
        <Route path="/collatzpage" element={<CollatzPage />} />
      </Routes>
    </div>
  );
};

/** this is part of hiding/showing the top menu when scrolling  */
window.addEventListener("scroll", hideMenu);

export { MainPage };
