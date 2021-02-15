import { GET_PLANS, GET_PLANS_ERROR, GET_PLANS_SUCCESS } from "../actions";

const INIT_STATE = {
  getLoading: false,
  setLoading: false,
  sendLoading: false,
  error: "",
  plans: [],
};

export const plansReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case GET_PLANS:
      return { ...state, getLoading: true };

    case GET_PLANS_SUCCESS:
      return { ...state, getLoading: false, plans: payload };

    case GET_PLANS_ERROR:
      return { ...state, getLoading: false, error: payload };

    default:
      return { ...state };
  }
};
