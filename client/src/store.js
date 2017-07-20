import { createStore, applyMiddleware, combineReducers } from 'redux';

import userReducer from './reducers/userReducer.js';
import queueReducer from './reducers/queueReducer.js';
import partyReducer from './reducers/partyReducer.js';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers({
    user: userReducer,
    queue: queueReducer,
    party: partyReducer
  }),
  applyMiddleware(logger, thunk)
);