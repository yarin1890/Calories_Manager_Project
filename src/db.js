// Yarin Ben Moshe - 314939885
// Import other classes
const mongoose = require('mongoose');

// Asynchronous function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://yarin1890:1q2w3e4r@yarindb.ljbkvhv.mongodb.net/?retryWrites=true&w=majority&appName=YarinDB', {
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;