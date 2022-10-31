import { ApiProxyStyle } from "./apiProxyStyle";
import { useState, useEffect } from "react";

const ApiProxyContent = {
  content: {
    img: process.env.PUBLIC_URL + "/collatz.PNG",
    headline: "API Proxy",
    paragraph:
      "API Proxy er en Node/Express server som kjører på en Heroku Dyno. Denne kan benyttes som en proxy for api'er, hvor jeg må beholde kontrollen på nøkkelen.",
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

const ApiData = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // NB: the response from server must align with the setup here.
          // Check API Proxy server at Heroku
          "https://keebit-realm-proxy.herokuapp.com/mongo"
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

  // console.log(reviews);

  let db;
  const tmpIndexReq = indexedDB.open("MyTestDatabase", 4);

  tmpIndexReq.onerror = (event) => {
    console.error("Why didn't you allow my web app to use IndexedDB?!");
  };

  // tmpIndexReq.onupgradeneeded = function () {
  //   let db = tmpIndexReq.result;
  //   if (!db.objectStoreNames.contains("books")) {
  //     // if there's no "books" store
  //     db.createObjectStore("books", { keyPath: "id" }); // create it
  //   }
  // };

  tmpIndexReq.onsuccess = (event) => {
    db = event.target.result;

    const objectStore = db.createObjectStore("listingsAndReview", {
      keyPath: reviews[0].data.listingsAndReview._id,
      autoIncrement: true,
    });

    objectStore.createIndex("bedrooms", "bed", { unique: false });

    objectStore.transaction.oncomplete = (event) => {
      // Store values in the newly created objectStore.
      const customerObjectStore = db
        .transaction("listingsAndReview", "readwrite")
        .objectStore("listingsAndReview");
      objectStore.forEach((review) => {
        customerObjectStore.add(review);
      });
    };
  };

  const dbContent = reviews.map((review) => (
    <Card
      key={review.data.listingsAndReview._id}
      {...review.data.listingsAndReview}
    />
  ));

  return <>{dbContent}</>;
};

export { ApiProxyContent, ApiData };
