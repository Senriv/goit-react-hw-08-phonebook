import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import {
  token,
  signUpUser,
  loginUser,
  logoutUser,
  currentUser,
} from 'services/metodsUserAPI';

export const signUpThunk = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpUser(credentials);
      token.set(data.token);
      Notiflix.Notify.success(`${credentials.name} account successfully created`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUser(credentials);
      token.set(data.token);
      Notiflix.Notify.success('Authorization was successful');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutUser();
      token.unSet();
      Notiflix.Notify.success('You are logged out');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const sessionToken = getState().auth.token;
      if (!sessionToken) {
        return rejectWithValue('Please Login');
      }
      token.set(sessionToken);
      const data = await currentUser();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
