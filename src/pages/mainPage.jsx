import { Routes, Route } from "react-router-dom";
import { Projectlist } from "./projects/projectList";
import { TopMenu } from "../components/top-menu";

const MainPage = () => {
  return (
    <div className="main-page">
      <TopMenu />
      <Routes>
        <Route path="/projectlist" element={<Projectlist />} />
      </Routes>
    </div>
  );
};

export { MainPage };
