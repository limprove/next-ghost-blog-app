import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const CardIndex = ({ postTitle, postImage, postId, postDate, postAuthors }) => {
  const { APP_URL } = process.env;
  return (
    <div>
      <Link href={`${APP_URL}/post/${postId}`}>
        <a>
          {/* Main Header */}
          <h1 className="text-xl font-pop px-8 my-8 md:text-xl md:pl-36 md:mt-12 md:mb-4">
            {postTitle}
          </h1>

          {/* Sub Header / Date / Author */}
          <div className="flex text-base font-pop font-light px-8 my-4 md:px-36 md:my-4 text-gray-500">
            <span className="flex align-baseline">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {postDate.substr(0, 10)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="flex align-baseline">
              <svg
                className="w-6 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {postAuthors}&nbsp;&nbsp;
            </span>
          </div>
          {/* Content - Main Image */}
          <img
            src={postImage}
            alt="develope"
            className="max-h-64 shadow-md object-cover w-7/12 ml-4 lg:ml-36 "
          />
        </a>

      </Link>
    </div>
  );
};

CardIndex.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postImage: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  postAuthors: PropTypes.string.isRequired,
};

export default CardIndex;
