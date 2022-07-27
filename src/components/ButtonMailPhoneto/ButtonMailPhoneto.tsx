import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  label: string;
}

const ButtonMailPhoneto = (props: Props) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = props.to;
        e.preventDefault();
      }}
    >
      {props.label}
    </Link>
  );
};

export default ButtonMailPhoneto;
