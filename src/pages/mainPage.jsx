import { Routes, Route } from "react-router-dom";
import { Projectlist } from "./projects/projectList";
import { TopMenu } from "../components/top-menu";
import { About } from "./about/about";

const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
      <TopMenu />
      <Routes>
        <Route path="/projectlist" element={<Projectlist />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export { MainPage };
