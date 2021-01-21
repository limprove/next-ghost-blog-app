import React from 'react';
import PropTypes from 'prop-types';
// import CardComment from './CardComment';
import CardContent from './CardContent';

const CardPost = ({ postData, codeBlock }) => (
  <main className="max-h-full mx-3 sm:mx-0">
    {/* Main Header */}
    <h1 className="text-4xl font-hev px-8 my-8 md:text-6xl md:pl-36 md:my-12 text-gray-600">
      {postData.title}
    </h1>

    {/* Sub Header / Date / Author */}
    <div className="text-base font-pop font-light px-4 my-4 md:mx-32 md:my-8 text-gray-500">
      <span>{postData.authors && postData.authors[0].slug}&nbsp;&nbsp;&nbsp;&nbsp;|</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;
        {postData?.created_at?.substr(0, 10)}
      </span>
    </div>

    {/* Content */}
    <section>
      {/* Content - Main Image */}
      <img
        src={postData.feature_image}
        alt="develope"
        className="w-full max-h-96 object-cover shadow-md opacity-90"
      />

      {/* Content - Description */}
      <CardContent />

    </section>

    {/* Comment */}
    {/* <CardComment /> */}
  </main>
);

CardPost.propTypes = {
  postData: PropTypes.object.isRequired,
  codeBlock: PropTypes.array.isRequired,
};

export default CardPost;
