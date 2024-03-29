import { Link } from "react-router-dom";
import { ApiProxyContent } from "./apiProxyContent";

const ApiProxy = () => {
  return (
    <>
      <div className="project">
        <Link to="/apiproxypage">
          <h3>{ApiProxyContent.content.headline}</h3>
          <div className="project-content">
            {/* <img
              src={ApiProxyContent.content.img}
              alt="Bilde av Collatz siden"
            /> */}
            {ApiProxyContent.content.paragraph.slice(0, 200)}
          </div>
        </Link>
        <i className="fa-brands fa-html5 fa-2x"></i>
        <i className="fa-brands fa-square-js fa-2x"></i>
        <i className="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </>
  );
};

export { ApiProxy };
