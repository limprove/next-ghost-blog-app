import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ContainerContent from '../../components/container/ContainerContent';
import AppLayout from '../../components/container/AppLayout';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossOrigin="anonymous" />

      </Head>
      <AppLayout>
        <ContainerContent postId={id} />
      </AppLayout>
    </>
  );
};
export default Post;
