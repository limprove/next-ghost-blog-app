import React from 'react';
import PropTypes from 'prop-types';
import Footer from './baseUI/Footer';
import Header from './baseUI/Header';

const AppLayout = ({ children }) => (
  <div className="flex flex-wrap">
    {/* Header */}
    <Header />

    {/* Content */}
    {children}

    {/* Footer */}
    <Footer />
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AppLayout;
