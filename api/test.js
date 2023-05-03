const test = require('ava')

test('should do things', t => {
  const users = {
    '1': {
      name: 'Bob Smith',
      age: 42,
      profilePic: 'url',
      tweets: [],
    }
  }
	t.like(users['1'], {name: 'Bob Smith'});
});
