import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Post(props){
  console.log(props)

  function handleUpVote(objectToUpdate){
    console.log('Like');
    const { dispatch } = props
    const action = {
      type: 'UP_VOTE',
      id: props.id,
      votes: props.votes
    };
    dispatch(action);
    console.log(action);
  }
  return(
    <div>
      <h3>{props.title} by {props.creator}</h3>
      <p>{props.details}</p>
      <p>{props.timeStamp}</p>
      <p><strong>{props.votes}</strong></p>
      <button onClick={handleUpVote}>Like</button>
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
