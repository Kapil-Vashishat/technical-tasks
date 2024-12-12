// frontend/src/components/FoodList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFood, logoutUser } from '../actions/authActions';

const FoodList = () => {
  const dispatch = useDispatch();
  const foodItems = useSelector(state => state.food.foodItems);
  const error = useSelector(state => state.food.errors);
  const [foodName, setFoodName] = useState('');

  const handleChange = e => {
    setFoodName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addFood(foodName));
    setFoodName('');
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h2>Food List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={foodName}
          onChange={handleChange}
          placeholder="Add food item"
        />
        <button type="submit">Add Food</button>
      </form>
      {error && <p>{error[0].msg}</p>}
      <ul>
        {foodItems.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default FoodList;