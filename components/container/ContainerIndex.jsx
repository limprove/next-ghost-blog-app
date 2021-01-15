import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_POSTS_REQUEST, LOAD_POSTS_REQUEST } from '../../reducers/post';
import CardIndex from '../baseUI/CardIndex';
import UserProfile from '../baseUI/UserProfile';

const ContainerIndex = () => {
  const dispatch = useDispatch();
  const { mainPosts, loadPostsLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
    return () => {
      dispatch({
        type: CLEAR_POSTS_REQUEST,
      });
    };
  }, []);

  return (
    <div className="flex align-top">

      {/* Loading circle */}
      {loadPostsLoading ? (
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
          <span
            className="text-gray-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
            style={{ top: '50%' }}
          >
            <i className="fas fa-circle-notch fa-spin fa-5x" />
          </span>
        </div>
      ) : (
        <>  {/* Content List */}
          <section className="max-h-full w-5/6">
            {mainPosts.map(
              (v) => (
                <CardIndex
                  key={v.id}
                  postTitle={v.title}
                  postImage={v.feature_image}
                  postId={v.id}
                  postContent={v.html}
                  postDate={v.created_at}
                  postAuthors={v.authors[0].name}
                />
              ),
            )}

          </section>

          {/* User Profile */}
          <UserProfile />
        </>
      )}

    </div>
  );
};

export default ContainerIndex;
