import actionType from './actionType';

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return {
        ...state, //because we are not changing the state, we are just adding to it
        cart: [...state.cart, action.payload], //payload is the product
      };

    case actionType.REMOVE_FROM_CART:
      return {};

    default:
      return state;
  }
};

export default productReducer;
