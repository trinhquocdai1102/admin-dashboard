export const snackbarSelector = (state: any) => state.snackbar.snackbar;

export const productWithParamSelector = (state: any) => state.product.product;

export const productsSelector = (state: any) => state.product.products;

export const filesSelector = (state: any) => state.product.files;

export const detailProductSelector = (state: any) => state.product.detail;

export const userLoginSelector = (state: any) => state.auth.auth;

export const userListSelector = (state: any) => state.auth.users;

export const getAuthorizeSelector = (state: any) => state.auth.authorize;
