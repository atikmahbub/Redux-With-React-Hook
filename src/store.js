import {createStore , combineReducers } from 'redux';
import countReducer from './Reducers/counterReducer.js';
import nameReducer from './Reducers/nameReducer.js'

const rootReducers = combineReducers({
	countReducer,
	nameReducer
})

export const store  = createStore(rootReducers)
