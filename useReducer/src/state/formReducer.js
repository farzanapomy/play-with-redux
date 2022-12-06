import { actionTypes } from './actionTypes';

export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  education: '',
  quantity: 0,
  feedback: '',
  term: false,
};
export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state, //because of immutability
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.TOGGLE:
      return {
        ...state, //because of immutability
        term: !state.term,
      };
    case actionTypes.INCREMENT:
      return {
        ...state, //because of immutability
        quantity: state.quantity + action.payload.count,
      };
    case actionTypes.DECREMENT:
      return {
        ...state, //because of immutability
        quantity: state.quantity - action.payload.count,
      };
    default:
      return state;
  }
};
