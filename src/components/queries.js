
const queryUsersAndPosts = 
`{
    users {
      id
      name
      email
    }
    posts {
      title
      id
      
    }
  }`


  const queryPost = (id) => {
    return `{
    post(where:{id:"${id}"}) {
      title
      content {
        document
      }
    }
  }`
};


  export {queryUsersAndPosts, queryPost}