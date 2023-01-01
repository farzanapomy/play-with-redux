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
        const newCar = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        selectedProduct.quantity += 1;
        return {
          ...state,
          cart: [...newCar, selectedProduct],
        };
      }
      return {
        ...state, //because we are not changing the state, we are just adding to it
        cart: [...state.cart, { ...action.payload, quantity: 1 }], //payload is the product
      };

    case actionType.REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCar = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        selectedProduct.quantity -= 1;
        return {
          ...state,
          cart: [...newCar, selectedProduct],
        };
      }
      return {
        ...state, //because we are not changing the state, we are just adding to it
        cart: [
          ...state.cart.filter((product) => product._id !== action.payload._id),
        ], //payload is the product
      };

    default:
      return state;
  }
};

export default productReducer;
