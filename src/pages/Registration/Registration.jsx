import Notiflix from 'notiflix';
import { signUpThunk } from 'redux/userAsyncThunk';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Form,
  FormLabel,
  FormInput,
  FormBtn,
} from './Registration.styled';

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
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <FormLabel>
          Your name
          <FormInput
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            placeholder="Enter your name"
          />
        </FormLabel>

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
            required
          />
        </FormLabel>

        <FormBtn type="submit">Sign up</FormBtn>
      </Form>
    </Container>
  );
};

export default Registration;
