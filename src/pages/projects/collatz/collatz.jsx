import { CollatzContent } from "./collatzContent";

const Collatz = () => {
  return (
    <>
      <div className="project">
        <div className="project-name">{CollatzContent.content.headline}</div>
        <div className="project-content">
          {CollatzContent.content.paragraph}
        </div>
        <i className="fa-brands fa-html5 fa-2x"></i>
        <i className="fa-brands fa-square-js fa-2x"></i>
        <i className="fa-brands fa-css3-alt fa-2x"></i>
      </div>
    </>
  );
};

export { Collatz };
