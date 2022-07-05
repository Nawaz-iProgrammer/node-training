require('../src/db/mongoose');

const Task = require('../src/model/task');

// Task.findByIdAndDelete('62beb3bb1845d478a96401d7')
//   .then((result) => {
//     console.log(result);
//     return Task.find({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const task = async (id, status) => {
  const deleteTask = await Task.findByIdAndDelete(id);
  const uncompleted = await Task.countDocuments({ completed: status });
  return uncompleted;
};

task('62be8677fd2882b1a4f9b775', false)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
