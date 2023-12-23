import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';



export const loginUser = createAsyncThunk('user/login', async (credentials) => {
  try {
    const response = await axios.post(`auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const loginAdmin = createAsyncThunk('admin/login', async (credentials) => {
  try {
    const response = await axios.post(`auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
});
