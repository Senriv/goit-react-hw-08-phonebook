import React from 'react'; // Импорт компонента React
import { Notification } from '../Notification/Notification'; // Импорт компонента уведомления
import { useDispatch, useSelector } from 'react-redux'; // Импорт хуков useDispatch и useSelector из Redux
import { deleteContactsThunk } from 'redux/contactsAsyncThunk'; // Импорт thunk для удаления контакта из Redux
import { selectVisibleContacts } from 'redux/selectors'; // Импорт селектора для видимых контактов из Redux
import {
  Contacts,
  Contact,
  ContactName,
  ContactBtnDelete,
} from './ContactList.styled'; // Импорт стилизованных компонентов для списка контактов

function ContactList() {
  const dispatch = useDispatch(); // Получение экземпляра функции dispatch из Redux
  const visibleContacts = useSelector(selectVisibleContacts); // Получение видимых контактов из Redux с помощью селектора

  // Функция для удаления контакта
  const onContactRemoving = id => {
    dispatch(deleteContactsThunk(id)); // Вызов thunk для удаления контакта по его id
  };

  // Вывод списка контактов, если они есть, либо уведомление о их отсутствии
  return visibleContacts.length > 0 ? (
    <Contacts>
      {visibleContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactName>{contact.name}:</ContactName>
          <p>{contact.number}</p>
          <ContactBtnDelete onClick={() => onContactRemoving(contact.id)}>
            Delete
          </ContactBtnDelete>
        </Contact>
      ))}
    </Contacts>
  ) : (
    <Notification message="There is no contacts"></Notification>
  );
}

export default ContactList;
