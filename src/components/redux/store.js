import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./index"; // Combine all reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;



