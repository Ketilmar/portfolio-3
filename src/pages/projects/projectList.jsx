import { Collatz } from "./collatz/collatz";
import { NavApp } from "./navApp/navApp";
import { Placeholder } from "./placeholder/placeholder";

const Projectlist = () => {
  return (
    <div className="projectlist-wrapper">
      <h3>Prosjekt liste</h3>
      <Collatz />
      <NavApp />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </div>
  );
};

export { Projectlist };
