import * as types from './types';
import uuid from 'uuid/v4';

export const addMessage = (text = '', userId) => ({
  type: types.ADD_MESSAGE,
  payload: {
    id: uuid(),
    text,
    userId
  }
});

export const addUser = (name = '') => ({
  type: types.ADD_USER,
  payload: {
    id: uuid(),
    name
  }
});

export const messageReceived = (text = '', userId) => ({
  type: types.MESSAGE_RECEIVED,
  payload: {
    id: uuid(),
    text,
    userId
  }
});

export const setCurrentUser = id => ({
  type: types.SET_CURRENT_USER,
  payload: {
    id
  }
});
