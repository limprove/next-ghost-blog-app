import produce from 'immer';

export const initialState = {
  singlePost: {},
  mainPosts: [],
  loadPostsLoading: false, // Load Posts
  loadPostsDone: false,
  loadPostsError: null,
  clearPostsLoading: false, // Clear Posts
  clearPostsDone: false,
  clearPostsError: null,
  loadPostLoading: false, // Load One Post
  loadPostDone: false,
  loadPostError: null,
  clearPostLoading: false, // Clear One Post
  clearPostDone: false,
  clearPostError: null,
  searchPostsLoading: false, // Search Posts
  searchPostsDone: false,
  searchPostsError: null,
};

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const CLEAR_POSTS_REQUEST = 'CLEAR_POSTS_REQUEST';
export const CLEAR_POSTS_SUCCESS = 'CLEAR_POSTS_SUCCESS';
export const CLEAR_POSTS_FAILURE = 'CLEAR_POSTS_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const CLEAR_POST_REQUEST = 'CLEAR_POST_REQUEST';
export const CLEAR_POST_SUCCESS = 'CLEAR_POST_SUCCESS';
export const CLEAR_POST_FAILURE = 'CLEAR_POST_FAILURE';

export const SEARCH_POSTS_REQUEST = 'SEARCH_POSTS_REQUEST';
export const SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS';
export const SEARCH_POSTS_FAILURE = 'SEARCH_POSTS_FAILURE';

// eslint-disable-next-line consistent-return
const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case SEARCH_POSTS_REQUEST:
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.loadPostsError = null;
      draft.mainPosts = draft.mainPosts.concat(action.data.posts);
      break;
    case SEARCH_POSTS_SUCCESS:
      draft.searchPostsLoading = false;
      draft.searchPostsDone = true;
      draft.searchPostsError = null;
      draft.mainPosts = draft.mainPosts.concat(action.data.posts);
      break;
    case SEARCH_POSTS_FAILURE:
    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = false;
      draft.loadPostsError = action.err;
      break;
    case CLEAR_POSTS_REQUEST:
    case CLEAR_POST_REQUEST:
      draft.clearPostsLoading = true;
      draft.clearPostsDone = false;
      draft.clearPostsError = null;
      break;
    case CLEAR_POSTS_SUCCESS:
      draft.clearPostsLoading = false;
      draft.clearPostsDone = true;
      draft.clearPostsError = null;
      draft.mainPosts = [];
      break;
    case CLEAR_POST_SUCCESS:
      draft.clearPostsLoading = false;
      draft.clearPostsDone = true;
      draft.clearPostsError = null;
      draft.singlePost = {};
      break;
    case CLEAR_POSTS_FAILURE:
    case CLEAR_POST_FAILURE:
      draft.clearPostsLoading = false;
      draft.clearPostsDone = false;
      draft.clearPostsError = action.err;
      break;
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;
    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.loadPostError = null;
      draft.singlePost = action.data;
      break;
    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostDone = false;
      draft.loadPostError = action.err;
      break;
    default:
      return state;
  }
});

export default reducer;
