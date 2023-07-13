import { HomeContent } from "./homeContent";
import { KeystoneContent } from "../../components/KeystoneContent";

const Home = () => {
  return (
    <div className="home-wrapper">
      {KeystoneContent('cljy78sx80004mib2odhore68')}
      <img
        src={HomeContent.content.image}
        alt="Bergen Norway"
        crossOrigin="Anonymous"
      ></img>
    </div>
  );
};

export { Home };
