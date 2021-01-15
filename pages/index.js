import Head from 'next/head';
import React from 'react';

import AppLayout from '../components/container/AppLayout';
import ContailnerIndex2 from '../components/container/ContailnerIndex2';
import ContainerIndex from '../components/container/ContainerIndex';

// import wrapper from '../store/configureStore';
// import { END } from 'redux-saga';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossOrigin="anonymous" />
      </Head>
      <AppLayout>
        {/* <ContainerIndex /> */}
        <ContailnerIndex2 />
      </AppLayout>
    </>
  );
}

// next - serverside rendering
// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//   context.store.dispatch({
//     type: LOAD_POSTS_REQUEST,
//   });
//   context.store.dispatch(END);
//   await context.store.sagaTask.toPromise();
// });
