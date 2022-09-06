import { Collatz } from "./collatz/collatz";
import { NavApp } from "./navApp/navApp";
import { Placeholder } from "./placeholder/placeholder";

const Projectlist = () => {
  return (
    <div className="projectlist-wrapper">
      projectlist
      <Collatz />
      <NavApp />
      <Placeholder />
    </div>
  );
};

export { Projectlist };
