import { Collatz } from "./collatz/collatz";
import { NavApp } from "./navApp/navApp";
import { Placeholder } from "./placeholder/placeholder";
import { ApiProxy } from "./apiProxy/apiProxy";
import { Keystone } from "./keystone/keystone";

const Projectlist = () => {
  return (
    <div className="projectlist-wrapper">
      <h3>Prosjekt liste</h3>
      <Collatz />
      <NavApp />
      <ApiProxy />
      <Keystone />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </div>
  );
};

export { Projectlist };
