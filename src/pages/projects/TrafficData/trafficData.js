import { trafficDataContent } from "./trafficDataContent";
import { Link } from "react-router-dom";

const TrafficData = () => {
  return (
    <>
      <div className="project">
      <Link to="/trafficdatapage">
        <h3>{trafficDataContent.content.headline}</h3>
        <div className="project-content">
          {trafficDataContent.content.paragraph.slice(0, 100)}
        </div>
        </Link>
        <i className="fa-brands fa-square-js fa-2x"></i>
        <i className="fa-brands fa-node-js fa-2x"></i>
      </div>
    </>
  );
};

export { TrafficData };
