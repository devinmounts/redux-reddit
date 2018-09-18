export default (state = {}, action) => {
  let newState;
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
  default:
    return state;
  }
};
