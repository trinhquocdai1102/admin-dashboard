import { ISnackbar } from '../../interface/snackbar';
import { createCustomAction } from 'typesafe-actions';

export const setSnackbarAction = createCustomAction(
  'snackbar/setSnackbar',
  (payload: ISnackbar) => ({
    payload,
  })
);
