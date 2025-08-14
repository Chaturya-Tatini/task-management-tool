const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/login', (req, res) => {
    res.json({ message: 'Login endpoint is working. Use POST with username and password.' });
});
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;