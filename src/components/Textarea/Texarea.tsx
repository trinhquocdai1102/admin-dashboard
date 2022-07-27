import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

interface Props {
  minRows?: number;
  placeholder?: string;
  style?: any;
  className?: string;
  field?: any;
  value?: any;
}

const TextareaC = (props: Props) => {
  return (
    <TextareaAutosize
      {...props.field}
      minRows={props.minRows}
      placeholder={props.placeholder}
      style={props.style}
      className={props.className}
    />
  );
};

export default TextareaC;
