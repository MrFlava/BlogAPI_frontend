import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts';


const appReducer = combineReducers({
  form: formReducer,
  posts,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
