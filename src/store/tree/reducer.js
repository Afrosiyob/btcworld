import { GET_TREE, GET_TREE_ERROR, GET_TREE_SUCCESS } from "../actions";

const INIT_STATE = {
  getLoading: false,
  error: "",
  treeData: [],
};

export const treeReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case GET_TREE:
      return { ...state, getLoading: true };

    case GET_TREE_SUCCESS:
      return { ...state, getLoading: false, treeData: payload };

    case GET_TREE_ERROR:
      return { ...state, getLoading: false, error: payload };

    default:
      return { ...state };
  }
};
