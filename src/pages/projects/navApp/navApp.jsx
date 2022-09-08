import { NavAppContent } from "./navAppContent";
import { Link } from "react-router-dom";

const NavApp = () => {
  return (
    <>
      <div className="project">
        <Link to="/navapppage">
          <h3>{NavAppContent.content.headline}</h3>

          <div className="project-content">
            {/* need to use 'props.children' because paragraph is a react.element */}
            {NavAppContent.content.paragraph.props.children.slice(0, 100)}
          </div>
        </Link>
        <i className="fa-brands fa-html5 fa-2x"></i>
        <i className="fa-brands fa-square-js fa-2x"></i>
        <i className="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </>
  );
};

export { NavApp };
