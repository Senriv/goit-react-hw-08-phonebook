import { createSlice } from '@reduxjs/toolkit'; // Импорт функции createSlice из библиотеки @reduxjs/toolkit
import {
  signUpThunk,
  loginThunk,
  logoutThunk,
  refreshUserThunk,
} from './userAsyncThunk'; // Импорт созданных ранее thunk для пользовательской авторизации

const initialState = {
  user: null, // Данные пользователя
  token: null, // Токен авторизации
  isLoading: false, // Флаг загрузки
  error: null, // Ошибка
};

// Обработчик для начала выполнения запроса
const handleIsLoading = state => {
  state.isLoading = true; // Устанавливаем флаг загрузки
};

// Обработчик для обработки ошибки
const handleIsReject = (state, { payload }) => {
  state.isLoading = false; // Снимаем флаг загрузки
  state.error = payload; // Записываем ошибку в состояние
};

// Создание среза состояния и редуктора для авторизации
const authSlice = createSlice({
  name: 'auth', // Название среза
  initialState, // Исходное состояние авторизации
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handleIsLoading) // Добавление обработчика для начала запроса регистрации
      .addCase(signUpThunk.rejected, handleIsReject) // Добавление обработчика для ошибки регистрации
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user; // Обработка успешной регистрации
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginThunk.pending, handleIsLoading)
      .addCase(loginThunk.rejected, handleIsReject)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user; // Обработка успешного входа
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutThunk.pending, handleIsLoading)
      .addCase(logoutThunk.rejected, handleIsReject)
      .addCase(logoutThunk.fulfilled, () => {
        return initialState; // Обработка успешного выхода
      })
      .addCase(refreshUserThunk.pending, handleIsLoading)
      .addCase(refreshUserThunk.rejected, handleIsReject)
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload; // Обработка успешного обновления данных пользователя
        state.isLoading = false;
        state.error = null;
      });
  },
});

// Экспорт редуктора authReducer
export const authReducer = authSlice.reducer;
