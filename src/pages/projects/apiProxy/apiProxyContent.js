import { ApiProxyStyle } from "./apiProxyStyle";

const ApiProxyContent = {
  content: {
    img: process.env.PUBLIC_URL + "/collatz.PNG",
    headline: "API Proxy",
    paragraph: "noe tekst her",
  },
};

const Card = (props) => {
  return (
    <>
      <ApiProxyStyle>
        <ul>
          <li>{props.name}</li>
          <li>{props.price}</li>
          <li>{props.access}</li>
          <li>{props.description}</li>
          <li>{props.room_type}</li>
        </ul>
      </ApiProxyStyle>
    </>
  );
};

export { ApiProxyContent, Card };
