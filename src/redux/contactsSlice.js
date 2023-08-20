import { createSlice } from '@reduxjs/toolkit'; // Импорт функции createSlice из библиотеки @reduxjs/toolkit
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from './contactsAsyncThunk'; // Импорт созданных ранее thunk

// Обработчик для начала выполнения запроса
const handlePending = state => {
  state.isLoading = true; // Устанавливаем флаг загрузки
};

// Обработчик для обработки ошибки
const handleReject = (state, { payload }) => {
  state.error = payload; // Записываем ошибку в состояние
};

// Создание среза состояния и редуктора
const contactsSlice = createSlice({
  name: 'contacts', // Название среза
  initialState: {
    items: [], // Список контактов
    isLoading: false, // Флаг загрузки
    error: null, // Ошибка
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending) // Добавление обработчика для начала запроса
      .addCase(getContactsThunk.rejected, handleReject) // Добавление обработчика для ошибки
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload; // Обработка успешного завершения запроса
      })
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.rejected, handleReject)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items]; // Добавление нового контакта в список
      })
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.rejected, handleReject)
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id); // Удаление контакта из списка
      });
  },
});

// Экспорт действий и редуктора
export const { addContactsActions, deleteContactsActions } = contactsSlice.actions; // Экспорт действий
export const contactsReducer = contactsSlice.reducer; // Экспорт редуктора
