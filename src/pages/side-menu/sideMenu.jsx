import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="side-menu">
      <Link to="/">Home</Link>
      <Link to="/projectlist">Projectlist</Link>
    </div>
  );
}

export default SideMenu;
