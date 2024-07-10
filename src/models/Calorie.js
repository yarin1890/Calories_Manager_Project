// Yarin Ben Moshe - 314939885
// Import other classes
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // For randomly generating GUIDs

// The 'Calorie' schema
const calorieSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  id: { type: String, default: uuidv4 },
  description: { type: String, required: true },
  category: { type: String, enum: ['breakfast', 'lunch', 'dinner', 'other'], required: true },
  amount: { type: Number, required: true }
});

module.exports = mongoose.model('Calorie', calorieSchema);