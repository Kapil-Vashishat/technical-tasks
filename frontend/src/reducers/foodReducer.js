import { ADD_FOOD, GET_FOOD } from '../actions/types';

const initialState = {
  foodItems: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foodItems: [...state.foodItems, action.payload],
      };
    case GET_FOOD:
      return {
        ...state,
        foodItems: action.payload,
      };
    default:
      return state;
  }
}