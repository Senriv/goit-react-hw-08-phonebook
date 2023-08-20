// Импорт библиотеки Axios для работы с HTTP-запросами
import axios from "axios";

// Создание экземпляра Axios с предустановленным базовым URL
export const baseUrlAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',  // Указываем базовый URL для всех запросов
});
