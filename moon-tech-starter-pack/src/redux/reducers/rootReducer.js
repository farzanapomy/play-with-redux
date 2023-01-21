import { combineReducers } from 'redux';
import filterReducer from './productReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  product: productReducer,
  filterReducer: filterReducer,
});

export default rootReducer;
