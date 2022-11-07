import { useState, useEffect } from "react";

const KeystoneContent = {
  content: {
    img: process.env.PUBLIC_URL + "/collatz.PNG",
    headline: "Keystone 6",
    paragraph: "Functional test of Keystone GraphQL API",
  },
};

const KeystoneQuery = () => {
  const [dbContent, setPosts] = useState([]);

  const fetchParams = {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // myHeader,
    mode: "cors",
    body: JSON.stringify({
      query: `{
        users {
          id
          name
          email
        }
        posts {
          title
          content {document}
          
        }
      }`,
    }),
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/graphql",
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
    fetchContent();
  }, []);

  console.log(dbContent);

  const users = dbContent.map((users) => (
    <Users key={users.data.users[0].id} {...users.data.users[0]} />
  ));
  const posts = dbContent.map((posts) => (
    <Posts key={posts.data.posts.title} {...posts.data.posts} />
  ));

  console.log(users);
  console.log(posts);

  return (
    <>
      <p>Keystone Users</p>
      <div>{users}</div>
      <div>{posts}</div>
    </>
  );
};

const Users = (props) => {
  console.log(props);
  return (
    <>
      <ul>
        <li>{props.name}</li>
        <li>{props.email}</li>
      </ul>
    </>
  );
};

const Posts = (props) => {
  console.log(props);
  return (
    <>
      <ul>
        <li>{props.title}</li>
        <li>{props.content}</li>
      </ul>
    </>
  );
};
export { KeystoneContent, KeystoneQuery };
