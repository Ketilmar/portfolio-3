import { Routes, Route } from "react-router-dom";
import { Projectlist } from "./projects/projectList";
import { TopMenu } from "../components/top-menu";
import { About } from "./about/about";
import { hideMenu } from "./side-menu/elementHider";
import { NavAppPage } from "./projects/navApp/NavAppPage";

const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
      <TopMenu />
      <Routes>
        <Route path="/projectlist" element={<Projectlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/navapppage" element={<NavAppPage />} />
      </Routes>
    </div>
  );
};

window.addEventListener("scroll", hideMenu);

export { MainPage };
