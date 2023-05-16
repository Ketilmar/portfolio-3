import { AboutText } from "./aboutText";
import './about.css'

const About = () => {
  return (
    <div className="about-wrapper">
      <h3>{AboutText.content.headline}</h3>
      <div className="about-me">
      <p>{AboutText.content.paragraph} </p>
      {/* <h4>Utdanning</h4>
      <li>{AboutText.content.education1}</li>
      <li>{AboutText.content.education2}</li>
      <h4>Erfaring</h4>
      <p>{AboutText.content.experience} </p> */}
      </div>
    </div>
  );
};

export { About };
