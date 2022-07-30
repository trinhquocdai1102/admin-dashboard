import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';
import { getAuthorizeSelector } from '../redux/selectors';

//protected Route state
type ProtectedRouteType = {
  roleRequired?: 'ADMIN' | 'USER';
};

const ProtectedRoutes = (props: ProtectedRouteType) => {
  const role = 'ADMIN';

  const isAuth = useSelector(getAuthorizeSelector);

  //if the role required is there or not
  if (props.roleRequired) {
    return isAuth ? (
      props.roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
