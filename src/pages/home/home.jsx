import { HomeContent } from "./homeContent";

const Home = () => {
  return (
    <div className="home-wrapper">
      <h3>{HomeContent.content.headline}</h3>
      <p> {HomeContent.content.paragraph} </p>
      <img
        src={HomeContent.content.image}
        alt="Bergen Norway"
        crossOrigin="Anonymous"
      ></img>
    </div>
  );
};

export { Home };
