import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import {
  initialState,
  productReducer,
} from '../state/ProductState/productReducer';
// create context
const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const [data, setData] = useState([]);
console.log(state);
  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_STATE });
    fetch(`../products.json`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
      )
      .catch((err) => dispatch({ type: actionTypes.FETCHING_ERROR }));
  }, []);

  const value = {
   state,
   dispatch
  };
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
