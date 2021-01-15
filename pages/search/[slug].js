import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import AppLayout from '../../components/container/AppLayout';
import ContainerIndex2 from '../../components/container/ContainerIndex2';

const SearchIndex = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossOrigin="anonymous" />
      </Head>
      <AppLayout>
        <ContainerIndex2 searchText={slug} />
      </AppLayout>
    </>
  );
};

export default SearchIndex;
