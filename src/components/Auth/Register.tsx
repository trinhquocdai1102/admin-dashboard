import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FastField, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import authApi from '../../api/authApi';
import { IRegister } from '../../interface/auth';
import { getUsersAction } from '../../redux/actions/auth';
import { ROUTESNAME } from '../../routing';
import { genderList, requiredField } from '../../ultis';
import InputC from '../Input/Input';
import { themePagination } from '../Product/Pagination';
import SelectC from '../Select/Select';

const RegisterC = () => {
  const dispatch = useDispatch();
  const initialValues: IRegister = {
    email: '',
    password: '',
    confirm_password: '',
    full_name: '',
    gender: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('This is not a valid email.').required(requiredField),
    password: Yup.string()
      .required(requiredField)
      .min(6, 'Password is too short - should be 6 chars minimum.'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password')], 'Password is not match')
      .required(requiredField),
    full_name: Yup.string().required(requiredField),
  });

  const onSubmit = async (data: IRegister) => {
    try {
      const response = await authApi.addUser(data);
      console.log(response);

      dispatch(getUsersAction(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="main-auth">
      <Typography variant="h4" className="title">
        Sign up
      </Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => {
          const { values, errors, setFieldValue } = formikProps;

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
              <Box className="field-rePassword">
                <Box
                  className={values.confirm_password ? 'text-field' : 'changing-field text-field'}
                >
                  <FastField name="confirm_password" component={InputC} type="password" />
                  <span className={values.confirm_password ? 'changing-span' : ''}></span>
                  <label className={values.confirm_password ? 'changing-label' : ''}>
                    Re-Password
                  </label>
                </Box>
                <Typography className="errorMessage">
                  {errors ? errors?.confirm_password : ''}
                </Typography>
              </Box>
              <Box className="field-name">
                <Box className={values.full_name ? 'text-field' : 'text-field changing-field '}>
                  <FastField name="full_name" component={InputC} type="text" />
                  <span className={values.full_name ? 'changing-span' : ''}></span>
                  <label className={values.full_name ? 'changing-label' : ''}>Full name</label>
                </Box>
                <Typography className="errorMessage">{errors ? errors?.full_name : ''}</Typography>
              </Box>
              <Box className="field-gender">
                <Box>
                  <Box>Gender</Box>
                  <ThemeProvider theme={themePagination}>
                    <FastField
                      name="gender"
                      component={SelectC}
                      data={genderList}
                      setFieldValue={setFieldValue}
                      classFormName="select-gender-form"
                      classSelectName="select-gender-select"
                      classItemName="select-gender-item"
                    />
                  </ThemeProvider>
                </Box>
                <Typography className="errorMessage">{errors ? errors?.gender : ''}</Typography>
              </Box>
              <Box className="forgot-pass">Forgot Password?</Box>
              <button type="submit">Sign up</button>
              <Box className="sign">
                Already have a account? <Link to={ROUTESNAME.login}>Sign in</Link>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default RegisterC;
