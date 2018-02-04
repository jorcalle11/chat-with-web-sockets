import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Chance from 'chance';

import reducer from './reducers';
import configureSocket from '../sockets';
import rootSaga from './sagas';

const chance = new Chance();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

const socket = configureSocket(store.dispatch, chance.first());
sagaMiddleware.run(rootSaga, { socket });

export default store;
