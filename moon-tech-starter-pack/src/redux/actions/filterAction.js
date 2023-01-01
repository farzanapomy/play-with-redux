import { TOGGLE_BRAND } from '../actionTypes/actionTypes';

export const toggleBrands = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};

export const toggleStock = () => {
  return {
    type: 'TOGGLE_STOCK',
  };
}