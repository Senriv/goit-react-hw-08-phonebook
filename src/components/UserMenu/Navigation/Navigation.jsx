import UserInfo from '../UserInfo/UserInfo'; // Импорт компонента UserInfo для отображения информации о пользователе

import { useSelector } from 'react-redux'; // Импорт хука useSelector из Redux
import { selectToken, selectUser } from 'redux/selectors'; // Импорт селекторов для токена и пользователя из Redux
import { Header, NavItems, NavItem, NavLink, Title } from './Navigation.styled'; // Импорт стилизованных компонентов для навигации

const Navigation = () => {
  const user = useSelector(selectUser); // Получение информации о пользователе из Redux с помощью селектора
  const token = useSelector(selectToken) ?? ''; // Получение токена из Redux с помощью селектора или пустой строки, если токен отсутствует

  return (
    <Header>
      <nav>
        <NavItems>
          {!user && (
            <>
              {token && (
                <NavItem>
                  <NavLink to="/contacts">Contacts</NavLink> {/* Ссылка на страницу контактов */}
                </NavItem>
              )}
              <NavItem>
                <NavLink to="/signup">Sign Up</NavLink> {/* Ссылка на страницу регистрации */}
              </NavItem>
              <NavItem>
                <NavLink to="/login">Login</NavLink> {/* Ссылка на страницу входа */}
              </NavItem>
            </>
          )}

          <UserInfo /> {/* Компонент для отображения информации о пользователе */}
        </NavItems>
      </nav>

      {user ? (
        <Title>Hello {user.name}! Welcome to your contacts.</Title> // Приветствие пользователя
      ) : (
        <Title>Welcome guest! Please login or sign up.</Title> // Приветствие для гостя
      )}
    </Header>
  );
};

export default Navigation;
