import { theCosmosContent } from "./theCosmosContent";
import { Link } from "react-router-dom";

const TheCosmos = () => {
  return (
    <>
      <div className="project">
      <Link to="/thecosmospage">
        <h3>{theCosmosContent.content.headline}</h3>
        <div className="project-content">
          {/* <img src={PlaceholderContent.content.img} alt="placeholder" /> */}
          {theCosmosContent.content.paragraph.slice(0, 100)}
        </div>
        </Link>
        <i className="fa-brands fa-html5 fa-2x"></i>
        <i className="fa-brands fa-square-js fa-2x"></i>
        <i className="fa-brands fa-css3-alt fa-2x"></i>
        <i className="fa-brands fa-react fa-2x"></i>
      </div>
    </>
  );
};

export { TheCosmos };
