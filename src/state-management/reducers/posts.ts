import { FETCH_POSTS, SUCCESS_POSTS, ERROR_POSTS } from "../types/types";
const initialState = {
  posts: [],
  loading: false,
};

export const posts = (
  state = initialState,
  action: {
    payload: any;
    type: any;
  }
) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return { ...state, posts: [], loading: true };
    }
    case SUCCESS_POSTS: {
      return { ...state, posts: action?.payload, loading: false };
    }
    case ERROR_POSTS: {
      return { ...state, posts: [], loading: false };
    }
    default:
      return state;
  }
};
