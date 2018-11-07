import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import project from './project';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  project
});

export default rootReducer;
