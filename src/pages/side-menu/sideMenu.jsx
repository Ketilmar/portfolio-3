import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="sidemenu-wrapper">
      <img src={process.env.PUBLIC_URL + "/avatar1.png"} />
      <div className="sidemenu-links">
        <Link to="/">Home</Link>
        <Link to="/projectlist">Projectlist</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default SideMenu;
