// import {
//   SIGN_IN_REQUEST,
//   SIGN_IN_SUCCESS,
//   SIGN_IN_FAILURE,
// } from "../action/signinActions";

const initialState = {
  loading: false,
  user: null,
  error: null,
};
const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SIGN_IN_REQUEST":
    //   return { ...state, loading: true, error: null };
    // case "SIGN_IN_SUCCESS":
    //   return { ...state, loading: false, user: action.payload };
    // case "SIGN_IN_FAILURE":
    //   return { ...state, loading: false, error: action.payload };
    case "USER_LOGGED_IN":
      return { ...state, user: action.payload };
    case "USER_ERROR":
      return { ...state, error: action.payload };
    case "SIGN_OUT":
      return { ...state };
    case "SIGN_OUT_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default signinReducer;
