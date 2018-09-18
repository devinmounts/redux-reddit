import postListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const samplePostData = {
    creator:  'Devin & Matt',
    title: 'Flourescent Lights steal Vitamin D',
    details: 'Get Outside Fool',
    timeStamp: '09/17/2018',
    votes: 0,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { creator, title, details, timeStamp, votes, id } = samplePostData;
    action = {
      type: 'ADD_POST',
      creator: creator,
      title: title,
      details: details,
      timeStamp: timeStamp,
      votes: 0,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        creator: creator,
        title: title,
        details: details,
        timeStamp: timeStamp,
        votes: 0,
        id: id
      }
    });
  });

  test('Should successfully increment votes on post', () => {
    const { creator, title, details, timeStamp, votes, id } = samplePostData;
    action = {
      type: 'UP_VOTE',
      creator: creator,
      title: title,
      details: details,
      timeStamp: timeStamp,
      votes: votes,
      id: id
    };
    expect(postListReducer(samplePostData, action)).toEqual({
      [id]: {
        creator: creator,
        title: title,
        details: details,
        timeStamp: timeStamp,
        votes: 1,
        id: id
      }
    })
  });
});
