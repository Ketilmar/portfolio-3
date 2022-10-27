import { useState, useEffect } from "react";

const ApiProxyPage = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://keebit-realm-proxy.herokuapp.com/mongo"
        );
        const json = await response.json();
        setReview([json]);
        console.log([json]);
      } catch (error) {
        console.log(error);
      }
    }; // end FetchData
    fetchData();
  }, []); // end useEffect

  const innhold = reviews.map((review) => (
    <Card
      key={review.data.listingsAndReview._id}
      {...review.data.listingsAndReview}
    />
  ));

  console.log(innhold);

  return (
    <div className="project-page">
      <div className="project-page-content">
        <div>{innhold}</div>
        <div className="project-page-urls">
          <a href="https://github.com/Ketilmar/api-proxy">
            "Api Proxy" Github page
          </a>
          <a href="legg inn url">api Proxy App</a>
        </div>
        <i className="fa-brands fa-html5 fa-4x"></i>
        <i className="fa-brands fa-square-js fa-4x"></i>
        <i className="fa-brands fa-css3-alt fa-4x"></i>
      </div>
    </div>
  );
};

const Card = (props) => {
  const review = props;

  console.log(review);
  return (
    <>
      <ul>
        <li>{review.name}</li>
        <li>{review.price}</li>
        <li>{review.access}</li>
        <li>{review.description}</li>
        <li>{review.room_type}</li>
      </ul>
    </>
  );
};

export { ApiProxyPage };
