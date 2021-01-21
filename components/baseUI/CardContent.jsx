import React from 'react';
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';

const CardContent = () => {
  const { codeBlock } = useSelector((state) => state.post);

  return (
    <div id="post_data__content" className="my-4 md:px-36 md:my-8 text-gray-600 break-all">
      {codeBlock.map((v, i) => {
        if (i % 2) {
          return (
            <>
              <SyntaxHighlighter language="javascript">
                {v}
              </SyntaxHighlighter>
            </>
          );
        }
        return <div dangerouslySetInnerHTML={{ __html: v }} />;
      })}
    </div>
  );
};

export default CardContent;
