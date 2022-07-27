import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
  label?: string;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | any;
  className?: string;
  style?: any;
  boxStyle?: any;
  variant?: 'contained' | 'outlined' | 'text' | any;
  handleClick(): void;
}

const ButtonC = (props: Props) => {
  return (
    <Stack spacing={2} direction="row" sx={props.boxStyle}>
      <Button
        className={props.className}
        variant={props.variant}
        onClick={props.handleClick}
        color={props.color}
        sx={props.style}
      >
        {props.label}
      </Button>
    </Stack>
  );
};

export default ButtonC;
