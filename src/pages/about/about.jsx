import './about.css'
import { KeystoneContent } from "../../components/KeystoneContent";
import { queryPost } from '../../data/queries';

const About = () => {

  return (
    <div className="about-wrapper">
      {/* <h3>{AboutText.content.headline}</h3> */}

      {/* <div className="about-me"> */}
      {/* <p>{AboutText.content.paragraph} </p> */}
      {console.log(KeystoneContent(queryPost('clk119ax50002qn0vsntl4526')))}
      {KeystoneContent(queryPost('clk119ax50002qn0vsntl4526'))}
      {/* <h4>Utdanning</h4>
      <li>{AboutText.content.education1}</li>
      <li>{AboutText.content.education2}</li>
      <h4>Erfaring</h4>
      <p>{AboutText.content.experience} </p> */}
      {/* </div> */}
    </div>
  );
};

export { About };
