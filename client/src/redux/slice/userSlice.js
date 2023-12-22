import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../thunkm'; // Update the import path

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, token: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        // Handle successful login
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        // Handle login failure or errors
        console.error('Login failed:', action.error);
      });
  },
});

export const { setUser, setToken } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
