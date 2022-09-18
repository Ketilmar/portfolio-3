import { CollatzContent } from "./collatzContent";

const CollatzPage = () => {
  return (
    <div className="project-page">
      <img
        src={process.env.PUBLIC_URL + "/collatz.PNG"}
        alt="Bilde av Collatz siden"
      />

      <div className="project-page-content">
        <p>{CollatzContent.content.paragraph}</p>
        <i className="fa-brands fa-html5 fa-4x"></i>
        <i className="fa-brands fa-square-js fa-4x"></i>
        <i className="fa-brands fa-css3-alt fa-4x"></i>
      </div>
    </div>
  );
};

export { CollatzPage };
