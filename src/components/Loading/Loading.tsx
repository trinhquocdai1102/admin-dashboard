import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface Props {
  height?: string;
  size?: string | number;
}

const ProgressLoading = (props: Props) => {
  return (
    <Box sx={{ display: 'flex', minHeight: props.height }}>
      <CircularProgress size={props.size} />
    </Box>
  );
};

export default ProgressLoading;
