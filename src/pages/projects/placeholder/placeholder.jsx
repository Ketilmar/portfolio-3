import { PlaceholderContent } from "./placeholderContent";

const Placeholder = () => {
  return (
    <>
      <div className="project">
        <div className="project-name">
          {PlaceholderContent.content.headline}
        </div>
        <div className="project-content">
          {PlaceholderContent.content.paragraph}
        </div>
        <i className="fa-brands fa-html5 fa-2x"></i>
        <i className="fa-brands fa-square-js fa-2x"></i>
        <i className="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </>
  );
};

export { Placeholder };
