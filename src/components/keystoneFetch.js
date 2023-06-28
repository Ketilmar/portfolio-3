// import { homeQuery } from "../pages/home/homeContent";
import { useState, useEffect } from "react";

const homeQuery = `query {
    users {
      id
      name
      email
    }
  }`
  

const KeystoneFetch = () =>{
  const [dib, setDib] = useState([]);

    const httpOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json",'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS','Access-Control-Allow-Credentials': 'true'},
        mode: "cors",
        credentials: "same-origin",
        body: JSON.stringify({
         query: homeQuery,
        }),
      };

      useEffect(() => {
      const fetchContent = async () => {
        try {
          const res= await fetch("http://10.10.224.77:3000/api/graphql", httpOptions)
          const data = await res.json()
          console.log({data});
          // return data
          setDib([data]);
        }
        catch  (err){
          console.log({err})
        };
    };

    
      fetchContent();
   },[] );


  const users = dib.map((data, id) => (
    <Users key={id} {...data.data.users} />
  ));

  console.log({users});

  return (
    <>
      <p>Keystone Users</p>
      <div>{users}</div>
    </>
  );

};

const Users = (props) => {
  console.log(props[0].name);
  return (
    <>
      <ul>
        <li>{props[0].name}</li>
        <li>{props[0].email}</li>
      </ul>
    </>
  );
};


export {KeystoneFetch}