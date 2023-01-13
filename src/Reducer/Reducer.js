import { useEffect, useState } from "react";
import { UPDATE_CART_COUNT, ADD_TO_CART_LIST, REMOVE_FROM_CART } from "./Action";


const intialState = {
  cartCount: 0,
  cartList: [],
  remove: 0,
};
function reducer(state = intialState, action) {
  switch (action.type) {
    case UPDATE_CART_COUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    case ADD_TO_CART_LIST:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
