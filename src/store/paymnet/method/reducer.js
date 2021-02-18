import {
  SEND_METHOD,
  SEND_METHOD_ERROR,
  SEND_METHOD_SUCCESS,
} from "../../actions";

const INIT_STATE = {
  getLoading: false,
  sendLoading: false,
  editLoading: false,
  error: "",
  method: [],
};

export const methodReducer = (state = INIT_STATE, { payload, type }) => {
  switch (type) {
    case SEND_METHOD:
      return { ...state, sendLoading: true };

    case SEND_METHOD_SUCCESS:
      return { ...state, sendLoading: false, method: payload };

    case SEND_METHOD_ERROR:
      return { ...state, sendLoading: false, error: payload };

    default:
      return { ...state };
  }
};
