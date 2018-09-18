import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewPostForm(props) {
  console.log(props);
  let _creator = null;
  let _title = null;
  let _details = null;

  function handleNewPostSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      creator: _creator.value,
      title: _title.value,
      details: _details.value,
      timeStamp: new Date().toUTCString(),
      votes: 0
    };
    dispatch(action);
    _creator.value = '';
    _title.value = '';
    _details.value = '';
  }


  return (
    <div>
      <form onSubmit={handleNewPostSubmission}>
        <input
          type='text'
          id='creator'
          placeholder='Creator'
          ref={(input) => {_creator = input;}}/>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <textarea
          id='details'
          placeholder='Describe.'
          ref={(textarea) => {_details = textarea;}}/>
        <button type='submit'>Post!</button>
      </form>
    </div>
  );
}

export default connect()(NewPostForm);
