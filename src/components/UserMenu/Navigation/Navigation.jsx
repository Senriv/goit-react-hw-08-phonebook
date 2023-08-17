import UserInfo from '../UserInfo/UserInfo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from 'redux/selectors';

const Navigation = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken) ?? '';

  return (
    <header>
      <nav>
        <ul>
          {!user && (
            <>
              {token && <Link to="/contacts">Contacts</Link>}
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}

          <UserInfo />
        </ul>
      </nav>

      {user ? (
        <h1>Hello {user.name}! Welcome to your contacts.</h1>
      ) : (
        <h1>Welcome guest! Please login or sing up.</h1>
      )}
    </header>
  );
};

export default Navigation;
