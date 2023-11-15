import { combineReducers } from 'redux';
import userReducer from './reducer-slice/userSlice';


const rootReducer = combineReducers({
  user: userReducer,


});

export default rootReducer;