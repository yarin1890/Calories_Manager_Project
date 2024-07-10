// Yarin Ben Moshe - 314939885
// Import other classes
const mongoose = require('mongoose');

// The 'User' schema
const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthday: { type: Date, required: true }
});

module.exports = mongoose.model('User', userSchema);