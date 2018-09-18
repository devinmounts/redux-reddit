

export default (state = {}, action) => {
  let newState;
  let newVotes;
  let newPostsByIdEntry;
  let newPostsByIdStateSlice;
  switch(action.type) {
    case 'ADD_POST':
      const { creator, title, details, timeStamp, votes, id } = action;
      newState = Object.assign({}, state, {
        [id]: {
          creator: creator,
          title: title,
          details: details,
          timeStamp: timeStamp,
          votes: votes,
          id: id
        }
       });
      return newState;
    case 'UP_VOTE':
    console.log('enter Up_vote')
      newVotes = state[action.id].votes + 1;
      newPostsByIdEntry = Object.assign({}, state[action.id], {
        votes: newVotes
      });
      newPostsByIdStateSlice = Object.assign({}, state, {
        [action.id]: newPostsByIdEntry
      });
      return newPostsByIdStateSlice;
  default:
    return state;
  }
};
