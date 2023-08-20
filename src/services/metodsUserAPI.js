// Импорт экспортированного экземпляра Axios с базовым URL
import { baseUrlAPI } from './baseUrlAPI';

// Объект для работы с токеном авторизации
export const token = {
  // Метод для установки токена в заголовок Authorization
  set: token => {
    baseUrlAPI.defaults.headers.Authorization = `Bearer ${token}`; // Устанавливаем токен в заголовок
  },
  // Метод для удаления токена из заголовка Authorization
  unSet: () => {
    baseUrlAPI.defaults.headers.Authorization = ''; // Убираем токен из заголовка
  },
};

// Функция для регистрации нового пользователя
export const signUpUser = async credentials => {
  const { data } = await baseUrlAPI.post('users/signup', credentials); // Отправляем POST-запрос на регистрацию пользователя
  return data; // Возвращаем данные созданного пользователя
};

// Функция для входа пользователя
export const loginUser = async credentials => {
  const { data } = await baseUrlAPI.post('users/login', credentials); // Отправляем POST-запрос на вход пользователя
  return data; // Возвращаем данные пользователя после успешного входа
};

// Функция для выхода пользователя
export const logoutUser = async () => {
  return baseUrlAPI.post('users/logout'); // Отправляем POST-запрос на выход пользователя
};

// Функция для получения текущего пользователя
export const currentUser = async () => {
  const data = await baseUrlAPI.get('users/current'); // Отправляем GET-запрос на получение текущего пользователя
  return data; // Возвращаем данные текущего пользователя
};
