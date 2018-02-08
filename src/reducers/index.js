import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  form: formReducer
});

const store = createStore(rootReducer)

export default rootReducer;