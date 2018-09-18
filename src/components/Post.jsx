import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Post(props){

  function handleUpVote(){
    const { dispatch } = props
    const action = {
      type: 'UP_VOTE',
      votes: props.votes,
      id: props.id
    };
    dispatch(action);
  }

  function handleDownVote(){
    const { dispatch } = props
    const action = {
      type: 'DOWN_VOTE',
      votes: props.votes,
      id: props.id
    };
    dispatch(action);
  }
  return(
    <div>
      <h3>{props.title} by {props.creator}</h3>
      <p>{props.details}</p>
      <p>{props.timeStamp}</p>
      <p><strong>{props.votes}</strong></p>
      <button onClick={handleUpVote}>Like</button>
      <button onClick={handleDownVote}>Dislike</button>


    </div>
  );
}

Post.propTypes = {
  creator: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  timeStamp: PropTypes.string,
  votes: PropTypes.number.isRequired
};

export default connect()(Post);
