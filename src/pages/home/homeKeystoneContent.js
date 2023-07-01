import { queryPost } from "../projects/keystone/queries";
import {useState, useEffect} from "react"
import { fetch1 } from "../projects/keystone/fetch1";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { renderers } from "../projects/keystone/DocumentRenderProps.tsx";


const HomeKeystoneContent = () => {

    const [selectedItem, setSelectedItem] = useState([])

    let url = "http://10.10.224.77:3000/api/graphql"

    const fetchData = async (e) => {
        console.log({e});
            const queriedData = await fetch1(url, queryPost(e));
            setSelectedItem(queriedData);
    };

    console.log({selectedItem});

    useEffect(() => {
        fetchData('e9293e85-0440-4bed-8ab4-65083bf88a1a');
    },[]);

    return (

        <>

            {selectedItem.length !== 0 && (
                <div>
                <DocumentRenderer document={selectedItem.data.post.content.document} renderers={renderers} />
                </div>
            )};
        </>

    )
};

export {HomeKeystoneContent}