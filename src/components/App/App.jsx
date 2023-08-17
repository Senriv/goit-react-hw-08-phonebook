import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { refreshUserThunk } from 'redux/userAsyncThunk';
import { PublicRoute } from 'components/UserMenu/PublicRout';
import { PrivateRoute } from 'components/UserMenu/PrivateRout';
import Navigation from 'components/UserMenu/Navigation/Navigation';

const Registration = lazy(() => import('pages/Registration/Registration'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <div>
      <Suspense>
        <Navigation />
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/signup" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
