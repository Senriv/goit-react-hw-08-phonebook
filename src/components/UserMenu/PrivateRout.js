import { useSelector } from "react-redux"; // Импорт хука useSelector из Redux
import { selectToken } from "redux/selectors"; // Импорт селектора для токена из Redux
import { Outlet, Navigate } from 'react-router-dom'; // Импорт компонентов для маршрутизации из react-router-dom

export const PrivateRoute = () => {
  const token = useSelector(selectToken); // Получение токена из Redux с помощью селектора

  return token ? (
    // Если токен существует, вывод дочерних компонентов
    <Outlet />
  ) : (
    // Если токен отсутствует, перенаправление на маршрут /login
    <Navigate to={'/login'} />
  );
};
