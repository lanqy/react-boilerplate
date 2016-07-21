import { combineReducers } from 'redux';
import projectReducer from './project';
import aboutReducer from './about';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  project: projectReducer,
  about: aboutReducer
});

export default rootReducer;
