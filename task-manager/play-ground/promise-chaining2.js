require('../src/db/mongoose');

const Task = require('../src/model/task');

Task.findByIdAndDelete('62beb3bb1845d478a96401d7')
  .then((result) => {
    console.log(result);
    return Task.find({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
