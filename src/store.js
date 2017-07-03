import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { hotColdReducer } from './reducers/index';

export default createStore(hotColdReducer, applyMiddleware(thunk));
