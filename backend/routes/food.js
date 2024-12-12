const express = require('express');
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const { addFood, getFood } = require('../controllers/foodController');
const messages = require('../utils/messages');

const router = express.Router();

// Add food item
router.post(
  '/add',
  [
    auth,
    check('name', messages.FOOD_NAME_REQUIRED).not().isEmpty(),
  ],
  addFood
);

// Get all food items
router.get('/', auth, getFood);

module.exports = router;