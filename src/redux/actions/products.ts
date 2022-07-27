import { ICreateProduct, IProduct } from '../../interface/product';
import { createCustomAction } from 'typesafe-actions';

export const getAllProductsWithParamsAction = createCustomAction(
  'product/getProductsWithParams',
  (payload: IProduct) => ({
    payload,
  })
);

export const getAllProductsAction = createCustomAction(
  'product/getAllProducts',
  (payload: IProduct) => ({
    payload,
  })
);

export const getProductDetailAction = createCustomAction(
  'product/getProductDetail',
  (payload: ICreateProduct) => ({
    payload,
  })
);
