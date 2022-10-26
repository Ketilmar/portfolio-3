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

  return (
    <div className="project-page">
      {/* <img src={CollatzContent.content.img} alt="Bilde av API Proxy kode" /> */}

      <div className="project-page-content">
        <div>
          {reviews.map((review, i) => (
            <ul key={review.data.listingsAndReview._id}>
              <li>{review.data.listingsAndReview.access}</li>
              <li>{review.data.listingsAndReview.bed_type}</li>
            </ul>
          ))}
        </div>
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

// const Card = (props) => {
//   const { review } = props;

//   return (
//     <div>
//       <div>{review.data.listingsAndReview.price}</div>
//       <div>
//         {review.data.listingsAndReview.bed_type}{" "}
//         {review.data.listingsAndReview.property_type}
//       </div>
//       <hr />
//     </div>
//   );
// };

export { ApiProxyPage };
