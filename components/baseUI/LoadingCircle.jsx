import React from 'react';

const LoadingCircle = () => (

  // <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
  //   <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
  // </div>
  <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
    <span
      className="text-gray-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
      style={{ top: '50%' }}
    >
      <i className="fas fa-circle-notch fa-spin fa-5x" />
    </span>
  </div>

);

export default LoadingCircle;
