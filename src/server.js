// Yarin Ben Moshe - 314939885
// Import other classes
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const calorieRoutes = require('./routes/calorieRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const { createInitialUser } = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database using the imported function
connectDB();

// Parse as JSON for the req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register user-related routes to handle HTTP requests
app.use(userRoutes);
app.use(calorieRoutes);
app.use(aboutRoutes);

// Starts the Express.js server and listens on the specified port, and creates an initial user, 
// it is inside the .listen() because connectDB is async, so the creation won't accidently happen before the DB is initialized
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  createInitialUser();
});