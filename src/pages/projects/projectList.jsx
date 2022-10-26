import { Collatz } from "./collatz/collatz";
import { NavApp } from "./navApp/navApp";
import { Placeholder } from "./placeholder/placeholder";
import { ApiProxy } from "./apiProxy/apiProxy";

const Projectlist = () => {
  return (
    <div className="projectlist-wrapper">
      <h3>Prosjekt liste</h3>
      <Collatz />
      <NavApp />
      <ApiProxy />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </div>
  );
};

export { Projectlist };
