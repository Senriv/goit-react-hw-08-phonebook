import { createSlice } from '@reduxjs/toolkit';
import {
  signUpThunk,
  loginThunk,
  logoutThunk,
  refreshUserThunk,
} from './userAsyncThunk';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const handleIsLoading = state => {
  state.isLoading = true;
};

const handleIsReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handleIsLoading)
      .addCase(signUpThunk.rejected, handleIsReject)
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginThunk.pending, handleIsLoading)
      .addCase(loginThunk.rejected, handleIsReject)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutThunk.pending, handleIsLoading)
      .addCase(logoutThunk.rejected, handleIsReject)
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUserThunk.pending, handleIsLoading)
      .addCase(refreshUserThunk.rejected, handleIsReject)
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const authReducer = authSlice.reducer;
