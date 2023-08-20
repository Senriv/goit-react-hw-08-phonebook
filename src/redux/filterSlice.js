import { createSlice } from '@reduxjs/toolkit'; // Импорт функции createSlice из библиотеки @reduxjs/toolkit

const filterInitialState = ''; // Инициализация начального состояния фильтра

// Создание среза состояния и редуктора для фильтрации
const filterSlice = createSlice({
  name: 'filter', // Название среза
  initialState: filterInitialState, // Исходное состояние фильтра
  reducers: {
    // Добавление действия setFilter
    setFilter(state, action) {
      return (state = action.payload); // Установка нового значения фильтра
    },
  },
});

// Экспорт действий и редуктора для фильтрации
export const { setFilter } = filterSlice.actions; // Экспорт действия setFilter
export const filterReducer = filterSlice.reducer; // Экспорт редуктора filterReducer
