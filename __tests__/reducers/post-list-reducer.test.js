import postListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const samplePostData = {
    creator:  'Devin & Matt',
    title: 'Flourescent Lights steal Vitamin D',
    details: 'Get Outside Fool',
    timeStamp: '09/17/2018',
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { creator, title, details, timeStamp, id } = samplePostData;
    action = {
      type: 'ADD_POST',
      creator: creator,
      title: title,
      details: details,
      timeStamp: timeStamp,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        creator: creator,
        title: title,
        details: details,
        timeStamp: timeStamp,
        id: id
      }
    });
  });
});
