import * as React from 'react';
import Input from '@mui/material/TextField';

interface Props {
  name?: string;
  style?: any;
  className?: string;
  label?: string;
  field?: any;
  type?: string;
  value?: any;
  disabled?: boolean;
  placeholder?: string;
  handleFocus?: () => void;
  handleBlur?: () => void;
  handleChange?: () => void;
  setValue?: () => void;
}

const InputC = (props: Props) => {
  return (
    <Input
      {...props.field}
      type={props.type}
      fullWidth
      autoComplete="off"
      placeholder={props.placeholder}
      disabled={props.disabled}
      label={props.label}
      className={props.className}
      onFocus={props.handleFocus}
      onBlur={props.handleBlur}
    />
  );
};

export default InputC;
