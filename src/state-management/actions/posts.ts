import axios from "axios";
import { FETCH_POSTS, SUCCESS_POSTS, ERROR_POSTS } from "../types/types";

// inital fetch posts
const initalFetch = () => {
  return {
    type: FETCH_POSTS,
  };
};

// successfully fetch posts
const successPosts = (successData: any) => {
  return {
    type: SUCCESS_POSTS,
    payload: successData,
  };
};

// fail fetch posts
const errorPosts = (errorMessage: any) => {
  return {
    type: ERROR_POSTS,
    payload: errorMessage,
  };
};

// posts fetch api call
export const fetchPosts = () => {
  return (dispatch: any) => {
    dispatch(initalFetch());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res: any) => {
        setTimeout(() => {
          dispatch(successPosts(res.data));
        }, 2000);
      })
      .catch((err: any) => {
        dispatch(errorPosts(err));
      });
  };
};
