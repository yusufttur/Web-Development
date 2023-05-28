const mongoose = require('mongoose');

const hash = require('../utilities/hash');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Password hashing
userSchema.pre('save', function (next) {
  if (this.password) {
    this.password = hash(this.password);
  }
  next();
});

// Password validate
userSchema.methods.validatePassword = function (data) {
  return bcrypt.compare(data, this.password);
};

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
