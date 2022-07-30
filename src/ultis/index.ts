export const validEmailRegex =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validNumberRegex = /^[0-9]*$/;

export const navbarHeight = 64;
export const menuWidth = 240;

export const requiredField = 'This field can not be blank.';

export const colorSnackbarCustom = {
  warning: {
    color: '#fff',
    background: '#ffc107',
  },
  error: {
    color: '#fff',
    background: 'rgb(211, 47, 47)',
  },
  info: {
    color: '#fff',
    background: 'rgb(2, 136, 209)',
  },
  success: {
    color: '#fff',
    background: 'rgb(46, 125, 50)',
  },
};

export const genderList = [
  { id: 1, value: 'male', label: 'male' },
  { id: 2, value: 'female', label: 'female' },
  { id: 3, value: 'other', label: 'other' },
];
