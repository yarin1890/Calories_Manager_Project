// Yarin Ben Moshe - 314939885
// Import other classes
const express = require('express');
const router = express.Router();

// Get the details of the developer/s
router.get('/about', (req, res) => {
  const developers = [
    { firstName: 'Yarin', lastName: 'Ben-Moshe', id: 314939885, email: 'yarinbenmoshe@gmail.com' },
  ];
  res.json(developers);
});

module.exports = router;