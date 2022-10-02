import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="sidemenu-wrapper">
      <img src={process.env.PUBLIC_URL + "/avatar1.png"} alt="The site owner" />
      <div className="sidemenu-links">
        <Link to="/">Home</Link>
        <Link to="/projectlist">Projects</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="sidemenu-icons">
        <i className="fa-brands fa-twitter fa-2x"></i>
        <i className="fa-brands fa-linkedin-in fa-2x"></i>
        <i className="fa-brands fa-discord fa-2x"></i>
      </div>
    </div>
  );
}

export default SideMenu;
