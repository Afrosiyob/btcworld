import { GET_PLANS, GET_PLANS_ERROR, GET_PLANS_SUCCESS } from "../actions";

export const getPlans = () => ({
  type: GET_PLANS,
});

export const getPlansSuccess = (response) => ({
  type: GET_PLANS_SUCCESS,
  payload: response,
});

export const getPlansError = (error) => ({
  type: GET_PLANS_ERROR,
  payload: error,
});
