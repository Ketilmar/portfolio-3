import { AboutText } from "./aboutText";

const About = () => {
  return (
    <div className="about-wrapper">
      <h3>{AboutText.content.headline}</h3>
      <p>{AboutText.content.paragraph} </p>
    </div>
  );
};

export { About };
