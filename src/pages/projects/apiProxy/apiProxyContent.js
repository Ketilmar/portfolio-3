import { ApiProxyStyle } from "./apiProxyStyle";
import { useState, useEffect } from "react";

const ApiProxyContent = {
  content: {
    img: process.env.PUBLIC_URL + "/collatz.PNG",
    headline: "API Proxy",
    paragraph:
      "API Proxy er en Node/Express server som kan benyttes som en proxy for API spørringer mot eksterne tjenester, hvor man må sikre tilgang til API nøkkelen. Nøkkelen lagres som en miljø variabel og er kun tilgjengelig for API Proxy. API Proxy kan benyttes av flere ulike klient og eksterne tjenester samtidig, med hver sin API nøkkel. Man kan velge å returnere eksterne data uendret til klienten, eller å returnere spesifikke data.",
    note: 'Her benyttes Azure Web App til å kjøre API Proxy, for å hente data fra MongoDB sin GraphQL tjeneste som er sikret med en API nøkkel.',
  },
};

const Card = (props) => {
  return (
    <>
      <ApiProxyStyle>
        <ul>
          <li>
            {"name: "}
            <br />
            {props.name}
          </li>
          <li>
            {"Price: "}
            <br />
            {props.price}
          </li>
          <li>
            {"Access: "}
            <br />
            {props.access}
          </li>
          <li>
            {"Description: "}
            <br />
            {props.description}
          </li>
          <li>
            {"Room type: "}
            <br />
            {props.room_type}
          </li>
        </ul>
      </ApiProxyStyle>
    </>
  );
};

const ApiData = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // NB: the response from server must align with the setup here.
          // Check API Proxy server at Azure Web App (former set up at Heroku)
          // "https://keebit-realm-proxy.herokuapp.com/mongo"
          'https://a-proxy.azurewebsites.net/mongo'
        );
        const json = await response.json();
        setReview([json]);
        // console.log([json]);
      } catch (error) {
        console.log(error);
      }
    }; // end FetchData
    fetchData();
  }, []); // end useEffect

  console.log(reviews);

  const dbContent = reviews.map((review) => (
    <Card
      key={review.data.listingsAndReview._id}
      {...review.data.listingsAndReview}
    />
  ));

  return <>{dbContent}</>;
};

export { ApiProxyContent, ApiData };
