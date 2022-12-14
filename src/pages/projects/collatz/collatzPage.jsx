import { CollatzContent } from "./collatzContent";

const CollatzPage = () => {
  return (
    <div className="project-page">
      <img src={CollatzContent.content.img} alt="Bilde av Collatz siden" />

      <div className="project-page-content">
        <div>{CollatzContent.content.paragraph}</div>
        <div className="project-page-urls">
          <a href="https://github.com/Ketilmar/collatz-1">
            Collatz Github page
          </a>
          <a href="https://ketilmar.github.io/collatz-1/">Collatz App</a>
        </div>
        <i className="fa-brands fa-html5 fa-4x"></i>
        <i className="fa-brands fa-square-js fa-4x"></i>
        <i className="fa-brands fa-css3-alt fa-4x"></i>
      </div>
    </div>
  );
};

export { CollatzPage };
