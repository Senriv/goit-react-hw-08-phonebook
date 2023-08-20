import { createAsyncThunk } from '@reduxjs/toolkit'; // Импорт функции createAsyncThunk из библиотеки @reduxjs/toolkit
import { getContacts, addContacts, deleteContacts } from '../services/metodsContactsAPI'; // Импорт функций для работы с контактами из методов services
import { token } from 'services/metodsUserAPI'; // Импорт объекта token для управления токеном
import Notiflix from 'notiflix'; // Импорт библиотеки Notiflix для уведомлений

// Создание thunk для получения списка контактов
export const getContactsThunk = createAsyncThunk(
  'contacts/allContacts', // Название действия (action)
  async (e, { rejectWithValue, getState }) => {
    try {
      const currentToken = getState().auth.token; // Получение текущего токена из хранилища состояния
      if (!currentToken) {
        return rejectWithValue('token is invalid'); // Если токен отсутствует, возвращаем ошибку
      }
      token.set(currentToken); // Устанавливаем токен в заголовок запроса
      const data = getContacts(); // Получаем данные контактов
      return data; // Возвращаем данные
    } catch (error) {
      return rejectWithValue(error.message); // В случае ошибки, возвращаем ошибку с сообщением
    }
  }
);

// Создание thunk для добавления нового контакта
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact', // Название действия (action)
  async (contact, { rejectWithValue }) => {
    try {
      const data = addContacts(contact); // Добавляем контакт
      Notiflix.Notify.success(`Contact ${contact.name} added`); // Отображаем уведомление об успешном добавлении
      return data; // Возвращаем данные
    } catch (error) {
      return rejectWithValue(error.message); // В случае ошибки, возвращаем ошибку с сообщением
    }
  }
);

// Создание thunk для удаления контакта по ID
export const deleteContactsThunk = createAsyncThunk(
  'contacts/delContact', // Название действия (action)
  async (id, { rejectWithValue }) => {
    try {
      const data = deleteContacts(id); // Удаляем контакт
      return data; // Возвращаем данные
    } catch (error) {
      return rejectWithValue(error.message); // В случае ошибки, возвращаем ошибку с сообщением
    }
  }
);
