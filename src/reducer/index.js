import {combineReducers} from 'redux';
import drugs from './drugReducer';

const rootReducer = combineReducers({ drugs });

export default rootReducer;