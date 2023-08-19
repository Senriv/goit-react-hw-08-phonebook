import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/userAsyncThunk';
import {
  Container,
  Form,
  FormLabel,
  FormInput,
  FormBtn,
} from './Login.styled';

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
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <FormLabel>
          Email
          <FormInput
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </FormLabel>

        <FormLabel>
          Password
          <FormInput
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
          />
        </FormLabel>

        <FormBtn type="submit">Log in</FormBtn>
      </Form>
    </Container>
  );
};

export default LoginPage;
