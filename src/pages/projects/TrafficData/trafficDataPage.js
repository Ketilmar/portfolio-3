// import { trafficDataContent } from "./trafficDataContent";
import { KeystoneContent } from "../../../components/KeystoneContent";
import { queryPost } from "../../../data/queries";

const TrafficDataPage = () => {
  return (
    <div className="project-page">
      {/* <img src={trafficDataContent.content.img} alt="Description" /> */}

      <div className="project-page-content">
        {/* <p>{trafficDataContent.content.paragraph}</p> */}
        {KeystoneContent(queryPost('clkact41g0000mp0uoj46zgr8'))}
        <div className="project-page-urls">
          <a href="https://github.com/Ketilmar/asistobe-vegvesen">
            TrafficData Github page
          </a>
        </div>
        <i className="fa-brands fa-square-js fa-3x"></i>
        <i className="fa-brands fa-node-js fa-3x"></i>
      </div>
    </div>
  );
};

export { TrafficDataPage };