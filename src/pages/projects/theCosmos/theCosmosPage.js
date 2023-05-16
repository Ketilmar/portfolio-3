import { theCosmosContent } from "./theCosmosContent";

const TheCosmosPage = () => {
  return (
    <div className="project-page">
      <img src={theCosmosContent.content.img} alt="Bilde av TheCosmos forside" />

      <div className="project-page-content">
        <p>{theCosmosContent.content.paragraph}</p>
        <div className="project-page-urls">
          <a href="https://github.com/Ketilmar/TheCosmos">
            TheCosmos Github page
          </a>
          <a href="https://ketilmar.github.io/TheCosmos/">TheCosmos webpage</a>
        </div>
        <i className="fa-brands fa-html5 fa-3x"></i>
        <i className="fa-brands fa-square-js fa-3x"></i>
        <i className="fa-brands fa-css3-alt fa-3x"></i>
        <i className="fa-brands fa-react fa-3x"></i>
      </div>
    </div>
  );
};

export { TheCosmosPage };