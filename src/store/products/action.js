import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../actions";

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccess = (response) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: response,
});

export const getProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});

export const addProduct = (productData) => ({
  type: ADD_PRODUCT,
  payload: productData,
});

export const addProductSuccess = (response) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: response,
});

export const addProductError = (error) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});
