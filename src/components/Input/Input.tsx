import * as React from 'react';
import Input from '@mui/material/TextField';

interface Props {
  style?: any;
  className?: string;
  label?: string;
  field?: any;
  type?: string;
  value?: any;
  disabled?: boolean;
  setValue: any;
}

const InputC = (props: Props) => {
  const { name } = props.field;
  return (
    <Input
      id={name}
      {...props.field}
      type={props.type}
      fullWidth
      disabled={props.disabled}
      label={props.label}
      // onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      //   props.setValue(event.target.value);
      // }}
      className={props.className}
    />
  );
};

export default InputC;
