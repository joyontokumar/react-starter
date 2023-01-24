import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./state-management/actions/posts";
const App = ({ postInfo, fetchPosts }: any) => {
  console.log("get posts info", postInfo);

  const cachePosts = useCallback(() => {
    fetchPosts();
  }, [fetchPosts]);
  useEffect(() => {
    cachePosts();
  }, [cachePosts]);
  return (
    <div className="posts-area p-5">
      <div className="container mx-auto">
        {postInfo?.loading ? (
          <div className="grid grid-cols-12">
            <div id="loader"></div>
          </div>
        ) : postInfo?.posts?.length ? (
          <div className="grid grid-cols-4 gap-5">
            {postInfo?.posts?.map((post: any) => (
              <div className="single-posst shadow-lg rounded-md" key={post?.id}>
                <img
                  src="https://images.nightcafe.studio//assets/rabbit-detective.jpeg?tr=w-1600,c-at_max"
                  alt="im"
                  className="aspect-square"
                />
                <div className="inner-body p-5">
                  <h3 className="text-lg leading-6 mb-4">{post?.title}</h3>
                  <p className="text-base">{post?.body}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Posts not availble</p>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    postInfo: state.posts,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
