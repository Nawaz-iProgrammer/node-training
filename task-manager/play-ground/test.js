const bcrypt = require('bcrypt');

const test = async () => {
  const password = 'erdcgr';
  const hashedPass = await bcrypt.hash(password, 8);

  console.log(hashedPass);
};

test();

console.log('test');

// const password = 'erdcgr';
// const hashedPass = bcrypt.hash(password, 8);

// hashedPass.then((result) => {
//   console.log(result);
// });

// console.log('tset');
