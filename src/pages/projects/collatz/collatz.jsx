import { CollatzContent } from "./collatzContent";
import { Link } from "react-router-dom";

const Collatz = () => {
  return (
    <>
      <div className="project">
        <Link to="/collatzpage">
          <h3>{CollatzContent.content.headline}</h3>
          <div className="project-content">
            <img
              src={CollatzContent.content.img}
              alt="Bilde av Collatz siden"
            />
            {CollatzContent.content.paragraph.slice(0, 200)}
          </div>
        </Link>
        <i className="fa-brands fa-html5 fa-2x"></i>
        <i className="fa-brands fa-square-js fa-2x"></i>
        <i className="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </>
  );
};

export { Collatz };
