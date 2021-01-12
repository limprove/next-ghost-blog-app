import React from 'react';

const UserProfile = () => (
  <>
    {/* User Profile */}
    <div className="w-48 mr-36 mt-28 hidden lg:block">
      <img
        src="/main-profile.png"
        alt="profile"
        className="shadow-xl rounded-full"
      />
      <h2 className="text-2xl font-pop text-center pt-4">Limprove</h2>
      <h3 className="text-md font-pop text-center pt-2 text-gray-500">
        Frontend Developer
      </h3>
      <h4 className="text-md font-pop text-center pt-0 pb-2 text-gray-500">
        @DDotIt
      </h4>
      <button type="submit" className="bg-blue-500 active:bg-blue-700 focus:outline-none  text-white w-48 h-8 rounded-lg shadow-md font-medium">
        LIKE
      </button>
    </div>
  </>
);

export default UserProfile;
