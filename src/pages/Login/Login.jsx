import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/userAsyncThunk';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => Notiflix.Notify.failure(`Incorrect login or password`));
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          Email
          <input
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </label>

        <label>
          Password
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
          />
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
