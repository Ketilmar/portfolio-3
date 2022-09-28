import { NavAppContent } from "./navAppContent";

const NavAppPage = () => {
  return (
    <div className="project-page">
      <img src={NavAppContent.content.img} alt="Bilde av NAV-appen" />

      <div className="project-page-content">
        <div>{NavAppContent.content.paragraph}</div>
        <i className="fa-brands fa-html5 fa-4x"></i>
        <i className="fa-brands fa-square-js fa-4x"></i>
        <i className="fa-brands fa-css3-alt fa-4x"></i>
      </div>
    </div>
  );
};

export { NavAppPage };
