import React, { createRef, useLayoutEffect } from 'react';

const Utterances = () => {
  const containerRef = createRef();

  useLayoutEffect(() => {
    const utterances = document.createElement('script');
    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'limprove/next-ghost-blog-app',
      'issue-term': 'pathname',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      async: true,
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current.appendChild(utterances);
  }, []);
  return (
    <div ref={containerRef} />
  );
};

export default Utterances;
