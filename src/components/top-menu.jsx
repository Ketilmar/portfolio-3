import { Link } from "react-router-dom";
import { elementHider } from "./elementHider";

const TopMenu = () => {
  return (
    <div className="topmenu-wrapper">
      <img src={process.env.PUBLIC_URL + "/avatar1.png"} alt="The site owner" />
      <div className="topmenu-links">
        <Link to="/">Home</Link>
        <Link to="/projectlist">Projects</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="topmenu-icons">
        <i className="fa-brands fa-twitter fa-2x"></i>
        <i className="fa-brands fa-discord fa-2x"></i>
        <i className="fa-brands fa-linkedin-in fa-2x"></i>
      </div>
    </div>
  );
};

/** hiding/showing the top menu when scrolling  */
window.addEventListener("scroll", elementHider);

export { TopMenu };
