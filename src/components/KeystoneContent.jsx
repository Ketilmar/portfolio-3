import { useState, useEffect } from "react";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { renderers } from "./DocumentRenderProps.tsx";
import { fetch1 } from "../data/fetch1";



const KeystoneContent = (query) => {

    const [selectedItem, setSelectedItem] = useState([])

    let url = "http://10.10.224.77:3100/api/graphql"

    const fetchData = async (e) => {
        console.log({e});
            const queriedData = await fetch1(url, e);
            setSelectedItem(queriedData);
    };

    console.log({selectedItem});

    useEffect(() => {
        fetchData(query);
    },[]);

    return (

        <>

            {selectedItem.length !== 0 && (
                <DocumentRenderer document={selectedItem.data.post.content.document} renderers={renderers} />
             )}
        </>

    )
};

export {KeystoneContent}