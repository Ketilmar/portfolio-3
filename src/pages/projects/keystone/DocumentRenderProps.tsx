import { DocumentRendererProps } from "@keystone-6/document-renderer";
import React from "react";

// const renderers = {
//     DocumentRendererProps: {
//         // use your editor's autocomplete to see what other renderers you can override
//         inline: {
//             bold: ({ children }) => {
//                 return <strong>{children}</strong>;
//             },
//         },
//         block: {
//             paragraph: ({ children, textAlign }) => {
//                 return <p style={{ textAlign }}>{children}</p>;
//             },
//         },
//         block: {
//             heading({ level, children, textAlign }) {
//               return <h2 style={{ textAlign, textTransform: 'uppercase' }}>{children}</h2>;
//             },
//         },
//     }
//   };



  const renderers: DocumentRendererProps['renderers'] = {
    // use your editor's autocomplete to see what other renderers you can override
    inline: {
      bold: ({ children }) => {
        return <strong>{children}</strong>;
      },
    },
    block: {
      paragraph: ({ children, textAlign }) => {
        return <p style={{ textAlign: 'left' }}>{children}</p>;
      },

      heading({ level, children, textAlign }) {
        const Comp = `h${level}` as const;
        return <Comp style={{ textAlign, color: 'white' }}>{children}</Comp>;
      },
      // blockquote: ({ children }) => {
      //   return <div style={{ textAlign: 'right' }}>{children}</div>;
      // },
      code({ children }) {
        return <pre style={{ 
          textTransform: 'none', 
          color: 'white',
          textAlign: 'left',
          background: 'gray',
          // wordWrap: 'break-word',
          overflow: 'auto',
         }}>{children}</pre>;
      }
    },
    
  };

  export {renderers}