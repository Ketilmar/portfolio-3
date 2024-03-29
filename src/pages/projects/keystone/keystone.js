import { Link } from "react-router-dom";
import { KeystoneContent } from "./keystoneContent";

const Keystone = () => {
  return (
    <>
      <div className="project">
        <Link to="/keystonepage">
          <h3>{KeystoneContent.content.headline}</h3>
          <div className="project-content">
            {/* <img
              src={KeystoneContent.content.img}
              alt="Bilde av Collatz siden"
            /> */}
            {KeystoneContent.content.paragraph.slice(0, 200)}
          </div>
        </Link>
        <i className="fa-brands fa-html5 fa-2x"></i>
        <i className="fa-brands fa-square-js fa-2x"></i>
        <i className="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </>
  );
};

export { Keystone };
