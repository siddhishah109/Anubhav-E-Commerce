import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import adminReducer from './slice/adminSlice';

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,

});

export default rootReducer;
