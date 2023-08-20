// Импорт экспортированного экземпляра Axios с базовым URL
import { baseUrlAPI } from "./baseUrlAPI";

// Функция для получения списка контактов
export const getContacts = async () => {
  const { data } = await baseUrlAPI.get('/contacts');  // Отправляем GET-запрос на /contacts
  return data;  // Возвращаем полученные данные
};

// Функция для добавления нового контакта
export const addContacts = async contact => {
  const { data } = await baseUrlAPI.post('/contacts', contact);  // Отправляем POST-запрос на /contacts с переданными данными контакта
  return data;  // Возвращаем данные созданного контакта
};

// Функция для удаления контакта по ID
export const deleteContacts = async id => {
  const { data } = await baseUrlAPI.delete(`/contacts/${id}`);  // Отправляем DELETE-запрос на /contacts/:id
  return data;  // Возвращаем данные об удаленном контакте
};

// Функция для обновления контакта по ID
export const updateContacts = async id => {
  const { data } = await baseUrlAPI.patch(`/contacts/${id}`);  // Отправляем PATCH-запрос на /contacts/:id
  return data;  // Возвращаем обновленные данные контакта
};
