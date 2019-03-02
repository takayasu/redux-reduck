import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../modules/reducer';

// Logger with default options
import logger from 'redux-logger'


export const initialState = {
    count: 0
};

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

export default store;
