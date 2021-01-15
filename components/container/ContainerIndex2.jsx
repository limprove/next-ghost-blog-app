import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CLEAR_POSTS_REQUEST, LOAD_POSTS_REQUEST, SEARCH_POSTS_REQUEST } from '../../reducers/post';
import CardIndex2 from '../baseUI/CardIndex2';

const ContainerIndex2 = ({ searchText }) => {
  const dispatch = useDispatch();
  const { mainPosts, searchPostsLoading } = useSelector((state) => state.post);

  useEffect(() => {
    if (searchText) {
      dispatch({
        type: SEARCH_POSTS_REQUEST,
        data: searchText,
      });
    } else {
      dispatch({
        type: LOAD_POSTS_REQUEST,
      });
    }
    return () => {
      dispatch({
        type: CLEAR_POSTS_REQUEST,
      });
    };
  }, []);

  return (
    <>
      {/* Loading circle */}
      {searchPostsLoading ? (
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
          <span
            className="text-gray-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
            style={{ top: '50%' }}
          >
            <i className="fas fa-circle-notch fa-spin fa-5x" />
          </span>
        </div>
      ) : (
        <div
          className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {mainPosts.map((v) => (
            <CardIndex2
              key={v.id}
              postTitle={v.title}
              postSubTitle={v.excerpt}
              postImage={v.feature_image}
              postId={v.id}
              postContent={v.html}
              postDate={v.created_at}
              postAuthor={v.authors[0].slug}
              postAuthorProfile={v.authors[0].profile_image}
              postTags={v.tags}
              postReadingTime={v.reading_time}
            />
          ))}
        </div>
      )}

    </>
  );
};

ContainerIndex2.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default ContainerIndex2;
