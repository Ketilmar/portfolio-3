import { Collatz } from "./collatz/collatz";
import { NavApp } from "./navApp/navApp";
import { Placeholder } from "./placeholder/placeholder";
import { ApiProxy } from "./apiProxy/apiProxy";
import { Keystone } from "./keystone/keystone";
import { TheCosmos } from "./theCosmos/theCosmos";

const Projectlist = () => {
  return (
    <div className="projectlist-wrapper">
      {/* <h1>Project list</h1> */}
      <Collatz />
      <NavApp />
      <ApiProxy />
      <Keystone />
      <TheCosmos />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </div>
  );
};

export { Projectlist };
