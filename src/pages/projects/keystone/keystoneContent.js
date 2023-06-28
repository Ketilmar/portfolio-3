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

  const httpOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json",'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS','Access-Control-Allow-Credentials': 'true'}, // myHeader,
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify({
      query: `{
        users {
          id
          name
          email
        }
        posts {
          title
          
        }
      }`,
    }),
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          // "https://a-content.azurewebsites.net/api/graphql",
          "http://10.10.224.77:3000/api/graphql",
          httpOptions
        );
        console.log(httpOptions);
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

  const users = dbContent.map((users, id) => (
    <Users key={id} {...users.data.users} />
  ));

  console.log({users});

  // const posts = dbContent[0].data.posts.map((posts) => (
  //   <Posts key={posts.title} {...posts} />
  // ));

  // const posts = dbContent.map((poster, index) => (
  //   <Posts
  //     key={index}
  //     // {...poster.data.posts[0].content.document[0].children[0]}
  //     {...poster.data.posts}
  //   />
  // ));

  return (
    <>
      <p>Keystone Users</p>
      <div>{users}</div>
      {/* <div>{posts}</div> */}
    </>
  );
};

const Users = (props) => {
  // console.log(props);
  return (
    <>
      <ul>
        <li>{props[0].name}</li>
        <li>{props[0].email}</li>
      </ul>
    </>
  );
};

const Posts = (props) => {
  // console.log(props);
  return (
    <>
      <ul>
        <li>{props[0].title}</li>
        <li>{props[0].content.document[0].children[0].text}</li>
        <li>{props[0].content.document[1].children[0].text}</li>
      </ul>
    </>
  );
};

export { KeystoneContent, KeystoneQuery };
