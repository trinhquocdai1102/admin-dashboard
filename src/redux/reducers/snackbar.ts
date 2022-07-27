import { ISnackbar } from '../../interface/snackbar';
import { colorSnackbarCustom } from '../../ultis';
import { ActionType, getType } from 'typesafe-actions';
import { setSnackbarAction } from '../actions/snackbar';

export interface SnackbarState {
  snackbar: ISnackbar;
}

const actions = { setSnackbarAction };

type Action = ActionType<typeof actions>;

const snackbarReducer = (
  state: SnackbarState = {
    snackbar: { open: false, message: '', color: colorSnackbarCustom.success },
  },
  action: Action
) => {
  switch (action.type) {
    case getType(setSnackbarAction):
      return { ...state, snackbar: action.payload };
    default:
      return state;
  }
};

export default snackbarReducer;
