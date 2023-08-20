import PropTypes from 'prop-types'; // Импорт модуля PropTypes для проверки типов

// Компонент уведомления
export const Notification = ({ message = 'There is no contacts' }) => (
  <h3>{message}</h3>
);

// Проверка типов props
Notification.propTypes = {
  message: PropTypes.string.isRequired, // Определение типа и обязательности свойства "message"
};
