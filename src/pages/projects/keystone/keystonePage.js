import { KeystoneContent6 } from "./KeystoneContent6";

const KeystonePage = () => {
  return (
    <div className="project-page">
      {/* <img src={KeystoneContent.content.img} alt="Bilde av Collatz siden" /> */}

      <div className="project-page-content">
        {/* <div>{KeystoneContent.content.paragraph}</div> */}
        {/* <div>{keystoneQuery()}</div> */}
        <KeystoneContent6/>
        <div className="project-page-urls">
          <a href="https://github.com/Ketilmar/collatz-1">
            Collatz Github page
          </a>
          <a href="https://ketilmar.github.io/collatz-1/">Collatz App</a>
        </div>
        <i className="fa-brands fa-html5 fa-3x"></i>
        <i className="fa-brands fa-square-js fa-3x"></i>
        <i className="fa-brands fa-css3-alt fa-3x"></i>
      </div>
    </div>
  );
};

export { KeystonePage };
