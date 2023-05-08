import { AboutText } from "./aboutText";

const About = () => {
  return (
    <div className="about-wrapper">
      <h3>{AboutText.content.headline}</h3>
      <div className="about-me">
      <p>{AboutText.content.paragraph} </p>
      </div>
    </div>
  );
};

export { About };
