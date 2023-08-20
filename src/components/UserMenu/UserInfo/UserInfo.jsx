import { useDispatch, useSelector } from 'react-redux'; // Импорт хуков useDispatch и useSelector из Redux
import { selectUser } from 'redux/selectors'; // Импорт селектора для пользователя из Redux
import { logoutThunk } from 'redux/userAsyncThunk'; // Импорт thunk для выхода из системы из Redux
import { UserLink, UserBtn } from './UserInfo.styled'; // Импорт стилизованных компонентов для информации о пользователе

const UserInfo = () => {
  const user = useSelector(selectUser); // Получение информации о пользователе из Redux с помощью селектора
  const dispatch = useDispatch(); // Получение экземпляра функции dispatch из Redux

  // Обработчик выхода из системы
  const handleSubmit = () => {
    dispatch(logoutThunk()); // Вызов thunk для выхода из системы
  };

  // Вывод информации о пользователе и кнопки выхода, если пользователь авторизован
  return (
    user && (
      <>
        <li>
          <UserLink to="/contacts">Contacts</UserLink> {/* Ссылка на страницу контактов */}
        </li>
        <li>
          <p>{user.email}</p> {/* Вывод email пользователя */}
        </li>
        <li>
          <UserBtn onClick={handleSubmit}>Log Out</UserBtn> {/* Кнопка для выхода из системы */}
        </li>
      </>
    )
  );
};

export default UserInfo;
