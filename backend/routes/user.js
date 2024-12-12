const express = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/userController');
const messages = require('../utils/messages');

const router = express.Router();

// Register user
router.post(
  '/register',
  [
    check('name', messages.NAME_REQUIRED).not().isEmpty(),
    check('email', messages.EMAIL_REQUIRED).isEmail(),
    check('password', messages.PASSWORD_MIN_LENGTH).isLength({ min: 6 }),
  ],
  registerUser
);

// Login user
router.post(
  '/login',
  [
    check('email', messages.EMAIL_REQUIRED).isEmail(),
    check('password', messages.PASSWORD_REQUIRED).exists(),
  ],
  loginUser
);

module.exports = router;