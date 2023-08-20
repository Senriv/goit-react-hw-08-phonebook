import { createSelector } from '@reduxjs/toolkit'; // Импорт функции createSelector из библиотеки @reduxjs/toolkit

// Селекторы для работы с состоянием контактов
export const selectContacts = state => state.contacts.items; // Получение списка контактов
export const selectFilter = state => state.filter; // Получение текущего значения фильтра

// Селекторы для работы с состоянием пользователя и авторизации
export const selectUser = state => state.auth.user; // Получение данных пользователя
export const selectToken = state => state.auth.token; // Получение токена пользователя
export const selectIsLoggedIn = state => state.auth.isLoggedIn; // Проверка статуса авторизации
export const selectIsRefreshing = state => state.auth.isRefreshing; // Проверка статуса обновления токена
export const selectError = state => state.auth.error; // Получение ошибки авторизации
export const selectIsLoading = state => state.auth.isLoading; // Проверка статуса загрузки

// Селектор для получения видимых контактов с учетом фильтрации
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter], // Параметры для селектора
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ); // Фильтрация контактов по имени с учетом фильтра
  }
);
