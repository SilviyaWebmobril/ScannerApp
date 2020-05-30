import React from 'react';
import AuthNavigator from './src/Navigators/AuthNavigator';
import common_reducer  from './src/redux/reducers/common_reducer'; 
import  user_reducer from './src/redux/reducers/user_reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider, useSelector } from 'react-redux';

const App = () => {

  const reducer = combineReducers({
    common : common_reducer,
    user : user_reducer
});

const store =  createStore(reducer,applyMiddleware(thunk));


  return (
    <Provider store={store}>
      <AuthNavigator />
      </Provider>
  );
};


export default App;