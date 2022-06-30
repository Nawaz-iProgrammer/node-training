const mongoose = require('mongoose');
const Joi = require('joi');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      const schema = Joi.string().email().validate(value);
      if (schema.error) {
        throw new Error('Enter a valid email');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be of positive number');
      }
    },
  },
});

const me = new User({
  name: '   Edge   ',
  email: '   edge@gmail.com  ',
});

me.save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const tasks = new Task({ description: 'Buy grocery', completed: false });

// tasks
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
