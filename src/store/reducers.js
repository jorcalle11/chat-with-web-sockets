import { combineReducers } from 'redux';
import * as types from './types';
// import union from 'lodash/union';

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      return [...state, action.payload];
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, action.payload];
    case types.GET_USERS:
      return action.payload.users;
    default:
      return state;
  }
};

const currentUser = (state = null, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return action.payload.id;
    default:
      return state;
  }
};

export default combineReducers({ messages, users, currentUser });
