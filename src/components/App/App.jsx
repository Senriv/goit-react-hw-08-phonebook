import { Suspense, lazy, useEffect } from 'react'; // Импорт необходимых компонентов из React
import { Route, Routes } from 'react-router-dom'; // Импорт компонентов для работы с маршрутизацией из react-router-dom
import { useDispatch } from 'react-redux'; // Импорт хука useDispatch для работы с Redux
import { refreshUserThunk } from 'redux/userAsyncThunk'; // Импорт thunk для обновления данных пользователя из Redux
import { PublicRoute } from 'components/UserMenu/PublicRout'; // Импорт компонента PublicRoute для публичных маршрутов
import { PrivateRoute } from 'components/UserMenu/PrivateRout'; // Импорт компонента PrivateRoute для закрытых маршрутов
import Navigation from 'components/UserMenu/Navigation/Navigation'; // Импорт компонента навигации
import { Container } from './App.styled'; // Импорт стилизованного компонента контейнера

const Registration = lazy(() => import('pages/Registration/Registration')); // Импорт компонента регистрации с ленивой загрузкой
const Login = lazy(() => import('pages/Login/Login')); // Импорт компонента входа с ленивой загрузкой
const Contacts = lazy(() => import('pages/Contacts/Contacts')); // Импорт компонента контактов с ленивой загрузкой

export const App = () => {
  const dispatch = useDispatch(); // Получение экземпляра функции dispatch из Redux

  useEffect(() => {
    dispatch(refreshUserThunk()); // Вызов thunk для обновления данных пользователя при монтировании компонента
  }, [dispatch]); // Зависимость пуста, поэтому thunk вызывается только один раз при монтировании

  return (
    <Container>
      <Suspense>
        <Navigation /> {/* Вывод компонента навигации */}
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            {/* Публичные маршруты */}
            <Route path="/signup" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            {/* Закрытые маршруты */}
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
