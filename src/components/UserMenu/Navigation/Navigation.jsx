import UserInfo from '../UserInfo/UserInfo';

import { useSelector } from 'react-redux';
import { selectToken, selectUser } from 'redux/selectors';
import { Header, NavItems, NavItem, NavLink, Title } from './Navigation.styled';

const Navigation = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken) ?? '';

  return (
    <Header>
      <nav>
        <NavItems>
          {!user && (
            <>
              {token && (
                <NavItem>
                  <NavLink to="/contacts">Contacts</NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink to="/signup">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
            </>
          )}

          <UserInfo />
        </NavItems>
      </nav>

      {user ? (
        <Title>Hello {user.name}! Welcome to your contacts.</Title>
      ) : (
        <Title>Welcome guest! Please login or sing up.</Title>

      )}
    </Header>
  );
};

export default Navigation;
