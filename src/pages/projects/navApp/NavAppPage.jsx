import { NavAppContent } from "./navAppContent";

const NavAppPage = () => {
  return (
    <div className="project-page">
      <img src={NavAppContent.content.img} alt="Bilde av NAV-appen" />

      <div className="project-page-content">
        <p>{NavAppContent.content.paragraph}</p>
        <i className="fa-brands fa-html5 fa-3x"></i>
        <i className="fa-brands fa-square-js fa-3x"></i>
        <i className="fa-brands fa-css3-alt fa-3x"></i>
      </div>
    </div>
  );
};

export { NavAppPage };
