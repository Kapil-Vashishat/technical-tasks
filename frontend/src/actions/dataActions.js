import { GET_DATA, SET_DATA } from './types';

// Action to get data
export const getData = () => async dispatch => {
  // Fetch data from API
  const res = await fetch('/api/data');
  const data = await res.json();

  dispatch({
    type: GET_DATA,
    payload: data,
  });
};

// Action to set data
export const setData = data => dispatch => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};