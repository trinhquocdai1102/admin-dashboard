export interface ISnackbar {
  color?: {
    color?: string;
    background?: string;
  };
  message?: string;
  open: boolean;
}
