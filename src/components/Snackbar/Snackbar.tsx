import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { snackbarSelector } from '../../redux/selectors';
import { setSnackbarAction } from '../../redux/actions/snackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  duration?: number;
}

const SnackbarC = (props: Props) => {
  const setSnackbar = useSelector(snackbarSelector);
  const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setSnackbarAction({ open: false }));
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={setSnackbar.open}
        autoHideDuration={props.duration}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          sx={{
            width: '100%',
            color: `${setSnackbar?.color?.color} !important`,
            background: `${setSnackbar?.color?.background} !important`,
          }}
        >
          {setSnackbar.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default SnackbarC;
