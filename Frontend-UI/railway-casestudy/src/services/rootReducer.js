import {combineReducers} from 'redux';
import authReducer from './Authentication/authReducer';


const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;