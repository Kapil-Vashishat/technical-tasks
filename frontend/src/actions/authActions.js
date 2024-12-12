import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, ADD_FOOD, GET_FOOD } from './types';

// Login user
export const loginUser = (email, password) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:5000/api/users/login', { email, password });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(getFood());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: "SERVER ERROR",
    });
  }
};

// Logout user
export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT });
};

// Add food item
export const addFood = (name) => async (dispatch, getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };

  try {
    const res = await axios.post('http://localhost:5000/api/food/add', { name }, config);

    dispatch({
      type: ADD_FOOD,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Get food items
export const getFood = () => async (dispatch, getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      'x-auth-token': token,
    },
  };

  try {
    const res = await axios.get('http://localhost:5000/api/food', config);

    dispatch({
      type: GET_FOOD,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};