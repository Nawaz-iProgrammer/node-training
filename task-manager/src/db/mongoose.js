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
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      const pass = value.includes('password');
      if (pass) {
        throw new Error('Enter a strong password');
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
  age: 51,
  password: 'paspsaijd438',
});

me.save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const tasks = new Task({ description: 'Buy grocery', completed: false });

tasks
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
