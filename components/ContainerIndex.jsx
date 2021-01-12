import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import CardIndex from './baseUI/CardIndex';
import UserProfile from './baseUI/UserProfile';

const ContainerIndex = ({ postData }) => {
  useEffect(() => {
    console.log(postData);
  });
  return (
    <div className="flex align-top">
      {/* Content List */}
      <section className="max-h-full w-5/6">
        <CardIndex />
        <CardIndex />
        <CardIndex />
      </section>

      {/* User Profile */}
      <UserProfile />
    </div>
  );
};

ContainerIndex.propTypes = {
  postData: PropTypes.any.isRequired,
};

export default ContainerIndex;
