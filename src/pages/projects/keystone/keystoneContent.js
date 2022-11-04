import { useState, useEffect } from "react";

const KeystoneContent = {
  content: {
    img: process.env.PUBLIC_URL + "/collatz.PNG",
    headline: "Keystone 6",
    paragraph: "Functional test of Keystone GraphQL API",
  },
};

const KeystoneQuery = () => {
  const [posts, setPosts] = useState([]);

  const myHeader = new Headers();
  myHeader.set("Content-Type", "application/json");

  console.log(myHeader.get("content-type"));
  const fetchParams = {
    method: "POST",
    headers: myHeader,
    mode: "no-cors",
    body: {
      query: `{
          posts {
            author {
              name
              postsCount
              id
              email
              createdAt
            }
            content {document}
          }
        }`,
    },
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/graphql",
          fetchParams
        );
        console.log(fetchParams);
        console.log(response);
        const json = await response.json();
        setPosts([json]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <>
      <p>Keystone DATA</p>
    </>
  );
};

export { KeystoneContent, KeystoneQuery };
