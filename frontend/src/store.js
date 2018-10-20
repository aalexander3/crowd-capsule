import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {

};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
);

export default store;
