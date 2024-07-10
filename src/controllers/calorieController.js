// Yarin Ben Moshe - 314939885
// Import other classes
const Calorie = require('../models/Calorie');
const CustomException = require(`../utils/CustomException`);

// Add calories to the DB
exports.addCalorie = async (req, res) => {
  try {
    const { user_id, year, month, day, description, category, amount } = req.body;
	
	// Validate that there are no missing parameters
      if (!user_id || !year || !month || !day || !description || !category || !amount) {
          throw new CustomException(`Error: Missing at least one required parameter for the request!`, 400);
      }
	// Create a new 'Calorie' object and save it to our DB
    const calorie = new Calorie({ user_id, year, month, day, description, category, amount });
    await calorie.save();
    res.status(201).json(calorie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get the report from the DB
exports.getReport = async (req, res) => {
  try {
    const { user_id, year, month } = req.query;
    const categories = ['breakfast', 'lunch', 'dinner', 'other'];
    const report = {};
	
	// Validate that there are no missing parameters
      if (!user_id || !year || !month) {
          throw new CustomException(`Missing at least one required parameter for the request!`, 400);
      }
	  
	// Loop through each category in the categories array, find the user's calorie entries, and add them without the id as required
    for (const category of categories) {
      report[category] = await Calorie.find({ user_id, year, month, category }).select('day description amount -_id');
    }

    res.json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};