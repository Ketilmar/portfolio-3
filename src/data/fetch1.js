

/** Fetch data with provided props */
const fetch1 = async (url, query) => {

    const httpOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json",'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS','Access-Control-Allow-Credentials': 'true'}, // myHeader,
        mode: "cors",
        credentials: "same-origin",
        body: JSON.stringify({
          query: query,
        }),
      };

      try {
        const res = await fetch(
          // "https://a-content.azurewebsites.net/api/graphql",
          url,
          httpOptions
        );

        let resData = await res.json();

        console.log({resData});
        console.log({query})

        return resData
        
      }

      catch (err) {
        console.log({err});
      }
    
};

export {fetch1}