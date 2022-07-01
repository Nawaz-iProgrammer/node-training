const mongoose = require('mongoose');
const Joi = require('joi');

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

module.exports = User;
