console.log('O_o');

//
// const friends = ['A', 'B'];
// const schoodFriends = ['C', 'D'];
// const collegeFriend = ['E', 'F'];

// console.log(friends);

// friends.push(...schoodFriends);

// console.log(friends);

// friends.push(...collegeFriend);

// console.log(friends);

// Object Desct

const user = {
  id: 123,
  name: {
    fName: 'A',
    mName: 'B',
    lName: 'C',
  },
  gender: 'male',
  color: 'hotpink',
};

// const favColor = user.color;
// const middleName = user.name.mName;

let { color: myFavColor } = user;
console.log(myFavColor);
