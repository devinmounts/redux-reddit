import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  console.log(props);
  return (
    <div>
      <hr/>
      <p>this is the post list</p>
      {Object.keys(props.postList).map(function(postId) {
        let post = props.postList[postId];
        return <Post title={post.title}
          creator={post.creator}
          details={post.details}
          timeStamp={post.timeStamp}
          votes={post.votes}
          key={postId}
          id={postId} />;
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
};

export default PostList;
