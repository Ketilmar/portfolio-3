import { Routes, Route } from "react-router-dom";
import { Projectlist } from "./projects/projectList";

const MainPage = () => {
  return (
    <div className="main-page">
      <Routes>
        <Route path="/projectlist" element={<Projectlist />} />
      </Routes>
    </div>
  );
};

export { MainPage };
