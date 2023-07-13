import { fetch1 } from "../../../data/fetch1";
import { useState, useEffect } from "react";
import { queryUsersAndPosts, queryPost } from "./queries";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { renderers } from "../../../components/DocumentRenderProps.tsx";

  
// This element gives me an dropdown list of posts. 
// The plan is to display the content of selected post.
const KeystoneContent6 = () => {

    const [state, setState] = useState([]);
    const [selectedItem, setSelectedItem] = useState([])

    let url = "http://10.10.224.77:3100/api/graphql"
    let query = queryUsersAndPosts

    const fetchData = async (e) => {
        // console.log({e});

        // this gives me the id of selected option
        if (e){
            console.log({e});
            // const selectedOption = await fetch1(url, queryPost(e.selectedOptions[0].id));
            const selectedOption = await fetch1(url, queryPost(e));
            console.log({selectedOption});
            setSelectedItem(selectedOption);       
        }

        else {
            const queriedData = await fetch1(url, query);
            // setState(queriedData.data.users[0].name);
            setState(queriedData);
        };
    };

    const handleChange = (e) => {
        // setSelectedItem(e.target.value);
        fetchData(e.target.selectedOptions[0].id);
      };

    console.log({selectedItem});

    useEffect(() => {
        fetchData();
    },[]);

    console.log({state});

    return (

        <div id='LISTEFORSØK'>

            
            {state.length !== 0 && (
                <div>
                    {/* <select id="posts-list" >{state.data.posts.map((post) => (<option onClick={fetchData(document.getElementById("posts-list"))} key={post.id} id={post.id} value={post.title}>{post.title}</option>))}</select> */}
                    <select id="posts-list" onChange={handleChange} >{state.data.posts.map((post) => (<option key={post.id} id={post.id} value={post.title}>{post.title}</option>))}</select>
                    
                </div>
            )}

            {selectedItem.length !== 0 && (
                <DocumentRenderer document={selectedItem.data.post.content.document} renderers={renderers} />
            )}

        </div>
    )

};


export {KeystoneContent6};