import { createStore } from 'redux';
import productReducer from './reducer/productReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(productReducer, composeWithDevTools());
//search redux devtools extension on chrome as an extension
export default store;
