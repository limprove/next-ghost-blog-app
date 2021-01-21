import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_POST_REQUEST, LOAD_POST_REQUEST } from '../../reducers/post';
import CardPost from '../baseUI/CardPost';
import LoadingCircle from '../baseUI/LoadingCircle';

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
      {loadPostLoading ? (<LoadingCircle />) : (<CardPost postData={singlePost} />)}

    </>
  );
};

ContainerContent.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default ContainerContent;
