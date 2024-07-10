// Yarin Ben Moshe - 314939885
// Import other classes
const express = require('express');
const router = express.Router();
const { getUserById } = require('../controllers/userController');

// Call the function to handle the request
router.get('/users/:id', getUserById);

module.exports = router;