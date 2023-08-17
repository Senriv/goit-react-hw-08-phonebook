import { baseUrlAPI } from './baseUrlAPI';

export const token = {
  set: token => {
    baseUrlAPI.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: token => {
    baseUrlAPI.defaults.headers.Authorization = '';
  },
};

export const signUpUser = async credentials => {
  console.log(credentials);
  const { data } = await baseUrlAPI.post('users/signup', credentials);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await baseUrlAPI.post('users/login', credentials);
  return data;
};

export const logoutUser = async () => {
  return baseUrlAPI.post('users/logout');
};

export const currentUser = async () => {
  const data = await baseUrlAPI.get('users/current');
  return data;
};
