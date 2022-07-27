import * as React from 'react';
import Input from '@mui/material/TextField';

interface Props {
  style?: any;
  className?: string;
  label?: string;
  field?: any;
  type?: string;
  value?: any;
}

const InputC = (props: Props) => {
  const { name } = props.field;
  return (
    <Input
      id={name}
      {...props.field}
      type={props.type}
      fullWidth
      label={props.label}
      className={props.className}
    />
  );
};

export default InputC;
