import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_POST_REQUEST, LOAD_POST_REQUEST } from '../../reducers/post';
import CardPost from '../baseUI/CardPost';

const ContainerContent = ({ postId }) => {
  const dispatch = useDispatch();
  const { singlePost, loadPostLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
      data: postId,
    });
    return () => {
      dispatch({
        type: CLEAR_POST_REQUEST,
      });
    };
  }, [postId]);

  return (
    <>
      {loadPostLoading ? (
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
          <span
            className="text-gray-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
            style={{ top: '50%' }}
          >
            <i className="fas fa-circle-notch fa-spin fa-5x" />
          </span>
        </div>
      ) : (<CardPost postData={singlePost} />)}

    </>
  );
};

ContainerContent.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default ContainerContent;
