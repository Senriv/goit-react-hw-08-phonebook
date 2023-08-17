import { baseUrlAPI } from "./baseUrlAPI";

export const getContacts = async () => {
  const { data } = await baseUrlAPI.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await baseUrlAPI.post('/contacts', contact);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await baseUrlAPI.delete(`/contacts/${id}`);
  return data;
};

export const updateContacts = async id => {
  const { data } = await baseUrlAPI.patch(`/contacts/${id}`);
  return data;
};