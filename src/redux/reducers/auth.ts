import { ILogin } from '../../interface/auth';
import { ActionType, getType } from 'typesafe-actions';
import {
  loginSuccessAction,
  getUsersAction,
  logoutSuccessAction,
  authorizeAction,
} from '../actions/auth';

export interface AuthState {
  auth?: ILogin;
}

const actions = { loginSuccessAction, getUsersAction, logoutSuccessAction, authorizeAction };

type Action = ActionType<typeof actions>;

const authReducer = (state: AuthState = {}, action: Action) => {
  switch (action.type) {
    case getType(getUsersAction):
      return { ...state, users: action.payload };
    case getType(loginSuccessAction):
      return { ...state, auth: action.payload };
    case getType(authorizeAction):
      return { ...state, authorize: action.payload };
    case getType(logoutSuccessAction):
      return {};

    default:
      return state;
  }
};

export default authReducer;
