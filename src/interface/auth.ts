export interface ILogin {
  email: string;
  password: string;
  gender: string;
  full_name: string;
  rememberMe?: boolean;
}
export interface IRegister {
  email: string;
  password: string;
  confirm_password: string;
  full_name: string;
  gender: string;
}
