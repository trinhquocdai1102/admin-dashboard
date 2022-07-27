import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import productReducer, { ProductState } from './reducers/products';
import snackbarReducer, { SnackbarState } from './reducers/snackbar';

export interface AppState {
  router: RouterState;
  snackbar: SnackbarState;
  product: ProductState;
}

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    snackbar: snackbarReducer,
    product: productReducer,
  });
}
