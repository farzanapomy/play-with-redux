import { TOGGLE_BRAND } from '../actionTypes/actionTypes';

export const toggleBrands = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};
