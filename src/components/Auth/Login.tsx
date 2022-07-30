import { Box, Typography } from '@mui/material';
import { FastField, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import authApi from '../../api/authApi';
import { ILogin } from '../../interface/auth';
import { authorizeAction, getUsersAction, loginSuccessAction } from '../../redux/actions/auth';
import { getAuthorizeSelector, userListSelector, userLoginSelector } from '../../redux/selectors';
import { ROUTESNAME } from '../../routing';
import '../../styles/Authentication.scss';
import { requiredField } from '../../ultis';
import InputC from '../Input/Input';

const LoginC = () => {
  const dispatch = useDispatch();
  const initialValues: ILogin = {
    email: '',
    password: '',
    gender: '',
    full_name: '',
    rememberMe: false,
  };

  const users = useSelector(userListSelector);
  const auth = useSelector(userLoginSelector);
  const authorize = useSelector(getAuthorizeSelector);

  console.log(authorize);

  const isAuth =
    auth &&
    users?.every((item: any) => item.email === auth.email && item.password === auth.password);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('This is not a valid email.').required(requiredField),
    password: Yup.string()
      .required(requiredField)
      .min(6, 'Password is too short - should be 6 chars minimum.'),
  });

  const onSubmit = async (data: ILogin) => {
    try {
      dispatch(loginSuccessAction(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response: any = await authApi.getUser();
        dispatch(getUsersAction(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserList();
  }, [dispatch]);

  useEffect(() => {
    dispatch(authorizeAction(isAuth));
  }, [authorize, dispatch, isAuth]);

  return (
    <Box className="main-auth">
      <Typography variant="h4" className="title">
        Login
      </Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => {
          const { values, errors } = formikProps;
          console.log(values);

          return (
            <Form>
              <Box className="field-email">
                <Box className={values.email ? 'text-field' : 'changing-field text-field'}>
                  <FastField name="email" component={InputC} type="text" />
                  <span className={values.email ? 'changing-span' : ''}></span>
                  <label className={values.email ? 'changing-label' : ''}>Username</label>
                </Box>
                <Typography className="errorMessage">{errors ? errors?.email : ''}</Typography>
              </Box>
              <Box className="field-password">
                <Box className={values.password ? 'text-field' : 'changing-field text-field'}>
                  <FastField name="password" component={InputC} type="password" />
                  <span className={values.password ? 'changing-span' : ''}></span>
                  <label className={values.password ? 'changing-label' : ''}>Password</label>
                </Box>
                <Typography className="errorMessage">{errors ? errors?.password : ''}</Typography>
              </Box>
              <Box className="forgot-pass">Forgot Password?</Box>
              <button type="submit">Login</button>
              <Box className="sign">
                Not a member? <Link to="#">Sign up</Link>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default LoginC;
