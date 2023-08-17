import Notiflix from 'notiflix';
import { signUpThunk } from 'redux/userAsyncThunk';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(signUpThunk({ name, email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
        setName('');
      })
      .catch(() => Notiflix.Notify.failure(`Oops...some error has occurred`));
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Your name</label>
        <input
          onChange={handleChange}
          name="name"
          value={name}
          type="text"
          placeholder="Enter your name"
        />
        <label>Email</label>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
          placeholder="Enter email"
        />
        <label>Password</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          placeholder="Enter password"
          required
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Registration;
