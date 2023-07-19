import { DocumentRendererProps } from "@keystone-6/document-renderer";
import React from "react";

// PS: You may have to include file ending when importing 'renderers' component.

  const renderers: DocumentRendererProps['renderers'] = {
    // use your editor's autocomplete to see what other renderers you can override
    inline: {
      bold: ({ children }) => {
        return <strong>{children}</strong>
      },
    },
    block: {
      paragraph: ({ children, textAlign }) => {
        return <p style={{ textAlign: textAlign }}>{children}</p>
      },

      heading({ level, children, textAlign }) {
        const Comp = `h${level}` as const;
        return <Comp style={{ textAlign, color: 'white' }}>{children}</Comp>
      },
      // blockquote: ({ children }) => {
      //   return <div style={{ textAlign: 'right' }}>{children}</div>;
      // },
      code({ children }) {
        return <pre style={{ 
          textTransform: 'none', 
          color: 'darkgrey',
          textAlign: 'left',
          background: 'darkblue',
          // wordWrap: 'break-word',
          overflow: 'auto',
         }}>{children}</pre>
      }
    },
    
  };

  export {renderers}