import { setFilter } from 'redux/filterSlice'; // Импорт action creator для установки фильтра из filterSlice
import { useDispatch, useSelector } from 'react-redux'; // Импорт хуков useDispatch и useSelector из Redux
import { FilterText, FilterInput } from './Filter.styled'; // Импорт стилизованных компонентов для фильтрации
import { selectFilter } from 'redux/selectors'; // Импорт селектора для фильтра из Redux

export const Filter = () => {
  const value = useSelector(selectFilter); // Получение текущего значения фильтра из Redux с помощью селектора
  const dispatch = useDispatch(); // Получение экземпляра функции dispatch из Redux

  // Функция для обработки изменения значения фильтра
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value)); // Вызов action creator для установки нового значения фильтра
  };

  return (
    <div>
      <FilterText>Find contacts by name</FilterText> {/* Текст для описания поля ввода фильтра */}
      <FilterInput type="text" value={value} onChange={changeFilter} /> {/* Поле ввода для фильтрации */}
    </div>
  );
};
