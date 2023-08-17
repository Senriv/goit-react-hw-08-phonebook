import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContacts } from '../services/metodsContactsAPI';
import { token } from 'services/metodsUserAPI';

export const getContactsThunk = createAsyncThunk(
  'contacts/allContacts',
  async (e, { rejectWithValue, getState }) => {
    try {
      const currentToken = getState().auth.token;
      if (!currentToken) {
        return rejectWithValue('token is invalid');
      }
      token.set(currentToken);
      const data = getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = addContacts(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/delContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = deleteContacts(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);