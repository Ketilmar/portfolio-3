import { ApiData, ApiProxyContent } from "./apiProxyContent";

const ApiProxyPage = () => {
  return (
    <div className="project-page">
      <div className="project-page-content">
        <>
          <h1> {ApiProxyContent.content.headline}</h1>
          <p>{ApiProxyContent.content.paragraph}</p>
          <p>{ApiProxyContent.content.note}</p>
        </>
        <div>{ApiData()}</div>
        <div className="project-page-urls">
          <a href="https://github.com/Ketilmar/api-proxy" rel="noopener noreferrer" target="_blank">
            "Api Proxy" Github page
          </a>
          <a href="legg inn url">api Proxy App</a>
        </div>
        <i className="fa-brands fa-html5 fa-3x"></i>
        <i className="fa-brands fa-square-js fa-3x"></i>
        <i className="fa-brands fa-css3-alt fa-3x"></i>
      </div>
    </div>
  );
};

export { ApiProxyPage };
