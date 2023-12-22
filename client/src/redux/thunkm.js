import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const loginUser = createAsyncThunk('user/login', async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const loginAdmin = createAsyncThunk('admin/login', async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/admin/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
});
