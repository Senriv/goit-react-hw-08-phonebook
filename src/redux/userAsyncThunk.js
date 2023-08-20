import { createAsyncThunk } from '@reduxjs/toolkit'; // Импорт функции createAsyncThunk из библиотеки @reduxjs/toolkit
import Notiflix from 'notiflix'; // Импорт библиотеки Notiflix для уведомлений
import {
  token,
  signUpUser,
  loginUser,
  logoutUser,
  currentUser,
} from 'services/metodsUserAPI'; // Импорт функций и объекта token для работы с пользователем

// Создание thunk для регистрации нового пользователя
export const signUpThunk = createAsyncThunk(
  'auth/register', // Название действия (action)
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpUser(credentials); // Регистрация пользователя
      token.set(data.token); // Установка токена в заголовок запроса
      Notiflix.Notify.success(`${credentials.name} account successfully created`); // Уведомление об успешной регистрации
      return data; // Возвращение данных пользователя
    } catch (error) {
      return rejectWithValue(error.message); // В случае ошибки, возвращение ошибки с сообщением
    }
  }
);

// Создание thunk для входа пользователя
export const loginThunk = createAsyncThunk(
  'auth/login', // Название действия (action)
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUser(credentials); // Вход пользователя
      token.set(data.token); // Установка токена в заголовок запроса
      Notiflix.Notify.success('Authorization was successful'); // Уведомление об успешной авторизации
      return data; // Возвращение данных пользователя
    } catch (error) {
      return rejectWithValue(error.message); // В случае ошибки, возвращение ошибки с сообщением
    }
  }
);

// Создание thunk для выхода пользователя
export const logoutThunk = createAsyncThunk(
  'auth/logout', // Название действия (action)
  async (_, { rejectWithValue }) => {
    try {
      await logoutUser(); // Выход пользователя
      token.unSet(); // Удаление токена из заголовка запроса
      Notiflix.Notify.success('You are logged out'); // Уведомление об успешном выходе
    } catch (error) {
      return rejectWithValue(error.message); // В случае ошибки, возвращение ошибки с сообщением
    }
  }
);

// Создание thunk для обновления данных текущего пользователя
export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser', // Название действия (action)
  async (_, { rejectWithValue, getState }) => {
    try {
      const sessionToken = getState().auth.token; // Получение текущего токена из состояния
      if (!sessionToken) {
        return rejectWithValue('Please Login'); // Если токен отсутствует, возвращение ошибки
      }
      token.set(sessionToken); // Установка токена в заголовок запроса
      const data = await currentUser(); // Получение данных текущего пользователя
      return data.data; // Возвращение данных текущего пользователя
    } catch (error) {
      return rejectWithValue(error.message); // В случае ошибки, возвращение ошибки с сообщением
    }
  }
);
