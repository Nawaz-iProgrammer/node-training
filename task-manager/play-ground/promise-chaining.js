require('../src/db/mongoose');

const User = require('../src/model/user');

// User.findByIdAndUpdate('62be83a1efc223e766bc7e0a', { age: 1 })
//   .then((result) => {
//     console.log(result);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('62be83a1efc223e766bc7e0a', 8)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
