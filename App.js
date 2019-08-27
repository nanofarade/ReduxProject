/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { TodosReducer } from './reducers/todosReducer';
import { UsersReducer } from './reducers/UsersReducer';
//import MyList from './containers/MyList';
import UserLists from './containers/UserLists';

const App = () => {
  const rootReducer = combineReducers({
    todosRed: TodosReducer,
    UsersRed: UsersReducer
  })
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return (
    <Provider store={store}>
         <UserLists />
    </Provider>
  );
};


export default App;
