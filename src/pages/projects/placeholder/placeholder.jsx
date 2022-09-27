import { PlaceholderContent } from "./placeholderContent";

const Placeholder = () => {
  return (
    <>
      <div className="project">
        <div className="project-name">
          {PlaceholderContent.content.headline}
        </div>
        <div className="project-content">
          <img
            src={process.env.PUBLIC_URL + "/sketchpad.png"}
            alt="placeholder"
          />
          {PlaceholderContent.content.paragraph.slice(0, 100)}
        </div>
        <i className="fa-brands fa-html5 fa-2x"></i>
        <i className="fa-brands fa-square-js fa-2x"></i>
        <i className="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </>
  );
};

export { Placeholder };
