import { useSelector } from 'react-redux'; // Импорт хука useSelector из Redux
import { selectToken } from 'redux/selectors'; // Импорт селектора для токена из Redux
import { Navigate, Outlet, useLocation } from 'react-router-dom'; // Импорт компонентов для маршрутизации из react-router-dom

export const PublicRoute = () => {
  const token = useSelector(selectToken); // Получение токена из Redux с помощью селектора
  const location = useLocation(); // Получение текущего местоположения маршрута

  return token ? (
    // Если токен существует, перенаправление на маршрут /contacts
    <Navigate to={location.state?.from ?? '/contacts'} />
  ) : (
    // Если токен отсутствует, вывод дочерних компонентов
    <Outlet />
  );
};
