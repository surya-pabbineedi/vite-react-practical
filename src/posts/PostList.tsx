import React from "react";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"; //

const PostList: React.FC = () => {
  // 1. utilize useFetch hook to fetch posts for the current user. If there is no user, then show all posts associated to all users
  // 2. If there is no user, show all posts associated to all users grouped by user

  return (
    <div>
      {/* user name */}
      POSTS
      {/* render user post details */}
    </div>
  );
};

export default PostList;
