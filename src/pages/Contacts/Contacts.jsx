import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/contactsAsyncThunk';
import Phonebook from 'components/Phonebook/Phonebook';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);

  return <Phonebook />;
};

export default ContactsPage;
