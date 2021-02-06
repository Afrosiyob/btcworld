import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../actions";

const INIT_STATE = {
  getLoading: false,
  editLoading: false,
  addLoading: false,
  error: "",
  products: [],
};

export const productReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, getLoading: true };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, getLoading: false, products: payload };

    case GET_PRODUCTS_ERROR:
      return { ...state, getLoading: false, error: payload };

    case ADD_PRODUCT:
      return { ...state, addLoading: true };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addLoading: false,
        products: [...state.products, payload],
      };

    case ADD_PRODUCT_ERROR:
      return { ...state, addLoading: false, error: payload };

    default:
      return { ...state };
  }
};
