import { actionTypes } from './actionTypes';
export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_STATE:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        //here will be added with the spread operator the new product to the cart
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
        //here will be removed from the cart the product with the id that is passed in the payload
      };

    default:
      return state;
  }
};
