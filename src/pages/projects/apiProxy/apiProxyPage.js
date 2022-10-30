import { ApiData, ApiProxyContent } from "./apiProxyContent";

const ApiProxyPage = () => {
  return (
    <div className="project-page">
      <div className="project-page-content">
        <>
          <h1> {ApiProxyContent.content.headline}</h1>
          <p>{ApiProxyContent.content.paragraph}</p>
        </>
        <div>{ApiData()}</div>
        <div className="project-page-urls">
          <a href="https://github.com/Ketilmar/api-proxy">
            "Api Proxy" Github page
          </a>
          <a href="legg inn url">api Proxy App</a>
        </div>
        <i className="fa-brands fa-html5 fa-4x"></i>
        <i className="fa-brands fa-square-js fa-4x"></i>
        <i className="fa-brands fa-css3-alt fa-4x"></i>
      </div>
    </div>
  );
};

export { ApiProxyPage };
