// Yarin Ben Moshe - 314939885
// Import other classes
const express = require('express');
const router = express.Router();
const { addCalorie, getReport } = require('../controllers/calorieController');

// Call the functions to handle the appropriate request
router.post('/addcalories', addCalorie);
router.get('/report', getReport);

module.exports = router;