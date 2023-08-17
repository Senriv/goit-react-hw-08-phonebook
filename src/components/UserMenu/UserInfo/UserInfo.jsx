import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logoutThunk } from 'redux/userAsyncThunk';
import { Link } from 'react-router-dom';

const UserInfo = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logoutThunk());
  };
  return (
    user && (
      <>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <p>{user.email}</p>
        </li>
        <li>
          <button onClick={handleSubmit}>Log Out</button>
        </li>
      </>
    )
  );
};

export default UserInfo;
