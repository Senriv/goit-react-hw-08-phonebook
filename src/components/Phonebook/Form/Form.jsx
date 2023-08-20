import { useState, useEffect } from 'react'; // Импорт компонента React
import { useDispatch, useSelector } from 'react-redux'; // Импорт хуков useDispatch и useSelector из Redux
import { getContactsThunk, addContactsThunk } from 'redux/contactsAsyncThunk'; // Импорт thunk для получения и добавления контактов из Redux
import { selectContacts } from 'redux/selectors'; // Импорт селектора для списка контактов из Redux
import { FormEl, FormLable, FormInput, FormBtn } from './Form.styled'; // Импорт стилизованных компонентов для формы

const Form = () => {
  const [name, setName] = useState(''); // Локальное состояние для имени
  const [phone, setPhone] = useState(''); // Локальное состояние для номера
  const contacts = useSelector(selectContacts); // Получение списка контактов из Redux с помощью селектора
  const dispatch = useDispatch(); // Получение экземпляра функции dispatch из Redux

  useEffect(() => {
    dispatch(getContactsThunk()); // Вызов thunk для получения контактов при монтировании компонента
  }, [dispatch]); // Зависимость пуста, поэтому thunk вызывается только один раз при монтировании

  // Обработчик изменения значений полей
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  // Функция для добавления нового контакта
  const onAddedContact = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`); // Проверка на наличие контакта с таким именем
      return;
    }
    dispatch(addContactsThunk(data)); // Вызов thunk для добавления контакта
  };

  // Обработчик отправки формы
  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number: phone,
    };
    onAddedContact(contact); // Вызов функции для добавления нового контакта
    resetForm(); // Сброс формы
  };

  // Функция для сброса состояния формы
  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <FormLable>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </FormLable>
      <FormLable>
        Number
        <FormInput
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />
      </FormLable>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormEl>
  );
};

export default Form;
