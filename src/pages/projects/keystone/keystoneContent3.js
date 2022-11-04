// import { useState, useEffect } from "react";
// const axios = require("axios");
import axios from "axios";

const KeystoneContent = {
  content: {
    img: process.env.PUBLIC_URL + "/collatz.PNG",
    headline: "Keystone 6",
    paragraph: "Functional test of Keystone GraphQL API",
  },
};

const KeystoneQuery = async () => {
  let tempReturn = {};
  await axios({
    method: "POST",
    // method: method,
    // url: `https://westeurope.azure.data.mongodb-api.com/app/data-wrcpi/endpoint/data/v1/action/findOne`,
    // url: "https://westeurope.azure.realm.mongodb.com/api/client/v2.0/app/data-wrcpi/graphql",
    url: "http://localhost:3000/api/graphql", // for å teste min lokale Keystone api
    // attempt to request data from Mongo HTTPS endpoints
    // url: "https://westeurope.azure.data.mongodb-api.com/app/data-wrcpi/endpoint/testroute",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",

      // apikey: `${process.env.MONGO_API_KEY}`,
    },

    // this works for /findone url
    // VIRKER IKKE LENGER. FINN UT HVORFOR!!
    // data: JSON.stringify({
    //   collection: "accounts",
    //   database: "sample_analytics",
    //   dataSource: "Cluster0",
    //   // projection: { _id: 1 },
    // }),

    // this works for graphql
    // remember to use POST method
    data: {
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
  })
    .then((response) => {
      // wasted a lot of time because i tried with return response.data here.
      tempReturn = response.data;
      console.log(response);

      // return "TEST";
    })
    .catch((error) => {
      console.error(error, "ERROR");
      return error;
    });
};

export { KeystoneContent, KeystoneQuery };
