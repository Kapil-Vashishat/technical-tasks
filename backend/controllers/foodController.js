const Food = require('../models/Food');
const { validationResult } = require('express-validator');
const messages = require('../utils/messages');

// Add food item
exports.addFood = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name } = req.body;

  try {
    let foodExists = await Food.findOne({ name });
    if (foodExists) {
      return res.status(400).json({ msg: messages.FODD_ALREADY_EXISTS });
    }

    const newFood = new Food({
      name,
      user: req.user.id,
    });

    const food = await newFood.save();
    res.json(food);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(messages.SERVER_ERROR);
  }
};

// Get all food items
exports.getFood = async (req, res) => {
  try {
    const foodItems = await Food.find({ user: req.user.id });
    res.json(foodItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(messages.SERVER_ERROR);
  }
};