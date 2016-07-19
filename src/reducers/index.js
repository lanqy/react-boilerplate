import { combineReducers } from 'redux';
import aReducer from './a';
import bReducer from './b';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  a: aReducer,
  b: bReducer
});

export default rootReducer;
