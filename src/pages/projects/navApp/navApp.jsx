import { NavAppContent } from "./navAppContent";
import { Link } from "react-router-dom";

const NavApp = () => {
  return (
    <>
      <div className="project">
        {/* <div className="project-name">{NavAppContent.content.headline}</div> */}
        <Link to="/navapppage">{NavAppContent.content.headline}</Link>
        <div className="project-content">{NavAppContent.content.paragraph}</div>
        <i className="fa-brands fa-html5 fa-2x"></i>
        <i className="fa-brands fa-square-js fa-2x"></i>
        <i className="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </>
  );
};

export { NavApp };
