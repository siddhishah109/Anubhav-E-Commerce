import { createSlice } from '@reduxjs/toolkit';
import { loginAdmin } from '../thunkm'; // Update the import path

const adminSlice = createSlice({
  name: 'admin',
  initialState: { admin: null, isAdminLoggedIn: false },
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
      state.isAdminLoggedIn = true;
    },
    clearAdmin: (state) => {
      state.admin = null;
      state.isAdminLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.fulfilled, (state, action) => {
        // Handle successful admin login
        state.admin = action.payload;
        state.isAdminLoggedIn = true;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        // Handle admin login failure or errors
        console.error('Admin login failed:', action.error);
      });
  },
});

export const { setAdmin, clearAdmin } = adminSlice.actions;
export const selectAdmin = (state) => state.admin;
export default adminSlice.reducer;
