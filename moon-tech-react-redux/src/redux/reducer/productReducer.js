import actionType from './actionType';

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id == action.payload._id
  );

  switch (action.type) {
    case actionType.ADD_TO_CART:
      if (selectedProduct) {
        return state;
      }
      return {
        ...state, //because we are not changing the state, we are just adding to it
        cart: [...state.cart, { ...action.payload, quantity: 1 }], //payload is the product
      };

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
