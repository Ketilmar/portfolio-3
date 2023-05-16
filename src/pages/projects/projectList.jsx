import { Collatz } from "./collatz/collatz";
import { NavApp } from "./navApp/navApp";
import { Placeholder } from "./placeholder/placeholder";
import { ApiProxy } from "./apiProxy/apiProxy";
import { Keystone } from "./keystone/keystone";
import { TheCosmos } from "./theCosmos/theCosmos";
import { TrafficData } from "./TrafficData/trafficData";

const Projectlist = () => {
  return (
    <div className="projectlist-wrapper">
      {/* <h1>Project list</h1> */}
      <TheCosmos />
      <TrafficData />
      <Collatz />
      <ApiProxy />
      <Keystone />
    </div>
  );
};

export { Projectlist };
