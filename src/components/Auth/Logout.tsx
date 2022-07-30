import { Button } from '@mui/material';
import { replace } from 'connected-react-router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccessAction } from '../../redux/actions/auth';
import { getAuthorizeSelector } from '../../redux/selectors';
import { ROUTESNAME } from '../../routing';

const LogoutC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getAuthorizeSelector);

  const handleLogout = () => {
    if (isAuth) {
      dispatch(logoutSuccessAction());
      dispatch(replace(ROUTESNAME.login));
    } else {
      dispatch(replace(ROUTESNAME.login));
    }
  };
  return (
    <>
      <Button className="logout-button" onClick={handleLogout} type="button" color="inherit">
        Logout
      </Button>
    </>
  );
};

export default LogoutC;
