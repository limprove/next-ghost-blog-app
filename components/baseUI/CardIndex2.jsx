import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const CardIndex2 = ({
  postTitle, postSubTitle, postImage, postId,
  postDate, postAuthor, postAuthorProfile, postTags, postReadingTime,
}) => (
  <>
    <div>
      <Link href={`http://localhost:3000/post/${postId}`}>
        <a>
          <div className="rounded-lg overflow-hidden">
            <div className="relative overflow-hidden pb-60">
              <img
                className="absolute h-full w-full object-cover object-center"
                src={postImage}
                alt=""
              />
            </div>
            <div className="relative bg-gray-100">
              <div className="py-10 px-8">
                <h3 className="text-2xl font-bold text-gray-600">{postTitle}</h3>
                <div className="text-gray-500 text-sm font-medium flex mb-4 mt-2">
                  <p>{postDate.substr(0, 10)}&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                  {Number(postReadingTime) + 140}명 조회
                </div>

                {/* HashTag */}
                <div className="my-3 flex flex-wrap -m-1">
                  {postTags.map((v) => (
                    <span key={v.id} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-3 font-bold text-sm leading-loose cursor-pointer">
                      #{v.name}
                    </span>
                  ))}

                </div>
                <p className="leading-7 text-gray-500">
                  {postSubTitle.substr(0, 80)}
                </p>
                <div className="mt-10 flex justify-between items-baseline">
                  <div className="text-gray-500 font-extralight text-sm">
                    <img
                      src={postAuthorProfile}
                      alt=""
                      className="w-9 inline-block -mt-1"
                    />&nbsp;&nbsp;by {postAuthor}
                  </div>

                  <div className="flex items-center">
                    <p className="mr-4">Read more</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.125"
                      height="13.358"
                      viewBox="0 0 14.125 13.358"
                    >
                      <g transform="translate(-3 -3.293)">
                        <path
                          id="Path_7"
                          data-name="Path 7"
                          d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                          fill="#1d1d1d"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  </>
);

export default CardIndex2;

CardIndex2.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postSubTitle: PropTypes.string.isRequired,
  postImage: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  postAuthor: PropTypes.string.isRequired,
  postAuthorProfile: PropTypes.string.isRequired,
  postTags: PropTypes.array.isRequired,
  postReadingTime: PropTypes.number.isRequired,
};
