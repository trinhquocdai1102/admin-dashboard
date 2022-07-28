import { ActionType, getType } from 'typesafe-actions';
import { IProduct } from '../../interface/product';
import {
  getAllProductsWithParamsAction,
  getProductDetailAction,
  getAllProductsAction,
} from '../actions/products';

export interface ProductState {
  product?: IProduct[];
  detail?: IProduct[];
}

export interface ProductInitial {
  product?: [];
  detail?: [];
}

const actions = {
  getAllProductsWithParamsAction,
  getProductDetailAction,
  getAllProductsAction,
};

type Action = ActionType<typeof actions>;

const productReducer = (state: ProductState = {}, action: Action) => {
  switch (action.type) {
    case getType(getAllProductsWithParamsAction):
      return { ...state, product: action.payload };
    case getType(getAllProductsAction):
      return { ...state, products: action.payload };
    case getType(getProductDetailAction):
      return { ...state, detail: action.payload };
    default:
      return state;
  }
};

export default productReducer;
