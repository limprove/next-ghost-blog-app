import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import wrapper from '../store/configureStore';

function MyApp({ Component }) {
  return (
    <>
      <Head>
        <title>Prove - Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(MyApp);
