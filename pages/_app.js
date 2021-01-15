/* eslint-disable */

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Prove - Project</title>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any,
};

export default wrapper.withRedux(withReduxSaga(MyApp));
