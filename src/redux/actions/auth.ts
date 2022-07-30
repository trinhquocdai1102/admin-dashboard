import { ILogin } from '../../interface/auth';
import { createCustomAction } from 'typesafe-actions';

export const getUsersAction = createCustomAction('login/getUsers', (payload: ILogin) => ({
  payload,
}));

export const loginSuccessAction = createCustomAction('login/loginSuccess', (payload: ILogin) => ({
  payload,
}));

export const logoutSuccessAction = createCustomAction('auth/logoutSuccess', () => ({}));

export const authorizeAction = createCustomAction('auth/authorize', (payload: boolean) => ({
  payload,
}));
