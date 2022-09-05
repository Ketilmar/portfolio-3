import { Collatz } from "./collatz/collatz";
import { NavApp } from "./navApp/navApp";

const Projectlist = () => {
  return (
    <div className="project-list">
      projectlist
      <Collatz />
      <NavApp />
    </div>
  );
};

export { Projectlist };
