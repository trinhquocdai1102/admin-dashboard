import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';
import { getAuthorizeSelector } from '../redux/selectors';

const PublicRoutes = () => {
  const isAuth = useSelector(getAuthorizeSelector);

  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
