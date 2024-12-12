import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import FoodList from './components/FoodList';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? <FoodList /> : <Login />}
    </div>
  );
};

export default App;