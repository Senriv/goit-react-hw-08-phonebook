import { configureStore } from '@reduxjs/toolkit'; // Импорт функции configureStore из библиотеки @reduxjs/toolkit
import storage from 'redux-persist/lib/storage'; // Импорт хранилища для redux-persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; // Импорт функций и констант для redux-persist
import { contactsReducer } from './contactsSlice'; // Импорт редуктора для контактов
import { filterReducer } from './filterSlice'; // Импорт редуктора для фильтрации
import { authReducer } from './userSlice'; // Импорт редуктора для пользователя

// Конфигурация для redux-persist
const persistConfig = {
  key: 'token', // Ключ для хранения данных в localStorage
  storage, // Используемое хранилище (localStorage)
  whitelist: ['token'], // Список ключей, которые будут сохраняться при персистентности
};

// Создание хранилища Redux
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Подключение редуктора для контактов
    filter: filterReducer, // Подключение редуктора для фильтрации
    auth: persistReducer(persistConfig, authReducer), // Подключение редуктора для пользователя с поддержкой redux-persist
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Игнорирование экшенов, которые не должны проходить сериализацию
      },
    }),
});

// Создание персистентного хранилища для сохранения состояния между перезагрузками страницы
export const persistor = persistStore(store);
