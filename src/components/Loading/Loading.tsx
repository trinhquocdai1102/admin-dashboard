import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface Props {
  height?: string;
  boxWidth?: string;
  size?: string | number;
  style?: any;
  position?: string;
}

const ProgressLoading = (props: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: props.position,
        width: props.boxWidth,
        minHeight: props.height,
      }}
    >
      <CircularProgress size={props.size} sx={props.style} />
    </Box>
  );
};

export default ProgressLoading;
