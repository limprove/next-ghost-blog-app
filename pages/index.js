import React from 'react';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import ContainerIndex from '../components/ContainerIndex';

const { CONTENT_API_KEY, BLOG_URL } = process.env;

export default function Home({ posts }) {
  return (
    <div>
      <AppLayout>
        <ContainerIndex postData={posts} />
      </AppLayout>
    </div>
  );
}

async function getPosts() {
  const result = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=id,title,url,feature_image,html&formats=plaintext`,
  ).then((res) => res.json());

  const { posts } = result;
  return posts;
}
// eslint-disable-next-line
export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

Home.propTypes = {
  posts: PropTypes.any.isRequired,
};
