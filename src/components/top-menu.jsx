import { Link } from "react-router-dom";
import { elementHider } from "./elementHider";

const TopMenu = () => {

  return (
    <div className="topmenu-wrapper">
      <img
        src={process.env.PUBLIC_URL + "/profilbilde.jpg"}
        alt="The site owner"
      />
      <div className="topmenu-links">
        <Link to="/">Home</Link>
        <Link to="/projectlist">Projects</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="topmenu-icons">
        <a className="fa-solid fa-envelope fa-2x"></a>
        <a
          href="https://discordapp.com/users/965890616502390784"
          className="fa-brands fa-discord fa-2x"
        ></a>
        <a
          href="https://www.linkedin.com/in/keebit"
          className="fa-brands fa-linkedin-in fa-2x"
        ></a>
      </div>
    </div>
  );
};

/** hiding/showing the top menu when scrolling  */
window.addEventListener("scroll", elementHider);

export { TopMenu };
