import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import authReducer, { AuthState } from './reducers/auth';
import productReducer, { ProductState } from './reducers/products';
import snackbarReducer, { SnackbarState } from './reducers/snackbar';

export interface AppState {
  router: RouterState;
  auth: AuthState;
  snackbar: SnackbarState;
  product: ProductState;
}

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    snackbar: snackbarReducer,
    product: productReducer,
  });
}
