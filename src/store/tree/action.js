import { GET_TREE, GET_TREE_ERROR, GET_TREE_SUCCESS } from "../actions";

export const getTree = (user_id) => ({
  type: GET_TREE,
  payload: user_id,
});

export const getTreeSuccess = (response) => ({
  type: GET_TREE_SUCCESS,
  payload: response,
});

export const getTreeError = (error) => ({
  type: GET_TREE_ERROR,
  payload: error,
});
