import { HomeContent } from "./homeContent";
import { HomeKeystoneContent } from "./homeKeystoneContent";

const Home = () => {
  return (
    <div className="home-wrapper">
      <h3>{HomeContent.content.headline}</h3>
      <p> {HomeContent.content.paragraph} </p>
      {/* <div>{KeystoneFetch()} </div> */}
      <HomeKeystoneContent/>
      <img
        src={HomeContent.content.image}
        alt="Bergen Norway"
        crossOrigin="Anonymous"
      ></img>
    </div>
  );
};

export { Home };
