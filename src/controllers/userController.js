// Yarin Ben Moshe - 314939885
// Import other classes
const User = require('../models/User');
const CustomException = require(`../utils/CustomException`);

// Get the user's information after receiving its ID in the request
exports.getUserById = async (req, res) => {
  try {
	// Find the user by its ID
    const user = await User.findOne({ id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create an initial user only if it doesn't exist already - as requested for the collection to be
exports.createInitialUser = async () => {
  try {
	const existingUser = await User.findOne({ id: 123123 });

    if (existingUser) {
      return;
    }
	
    const user = new User({
      id: 123123,
      firstName: 'moshe',
      lastName: 'israeli',
      birthday: new Date(1990, 0, 10)
    });
	
    await user.save();
    console.log('The initial user has been created.');
  } catch (err) {
    console.error('Failed to create initial user, one probably already exists!', err);
  }
};