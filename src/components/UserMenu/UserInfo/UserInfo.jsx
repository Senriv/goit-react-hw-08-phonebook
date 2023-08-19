import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logoutThunk } from 'redux/userAsyncThunk';
import { UserLink, UserBtn } from './UserInfo.styled';

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
          <UserLink to="/contacts">Contacts</UserLink>
        </li>
        <li>
          <p>{user.email}</p>
        </li>
        <li>
          <UserBtn onClick={handleSubmit}>Log Out</UserBtn>
        </li>
      </>
    )
  );
};

export default UserInfo;
