import { combineReducers } from 'redux';
import signinReducer from '../signin/store/reducer/signinReducer';

const rootReducer = combineReducers({
    signin: signinReducer,
});

export default rootReducer;
