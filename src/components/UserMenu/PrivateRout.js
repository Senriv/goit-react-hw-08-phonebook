import { useSelector } from "react-redux"
import { selectToken } from "redux/selectors";
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const token = useSelector(selectToken);
  return token ? <Outlet /> : <Navigate to={'/login'} />;
};