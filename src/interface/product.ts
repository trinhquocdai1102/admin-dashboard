export interface IProduct {
  categoryId: string;
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  amount: string;
  thumbnailUrl: string;
  totalItem: number;
  createdAt: string;
  updatedAt: string;
  checked: boolean;
}

export interface ProductItemWithUpdateButton {
  id: string;
  price: string;
}

export interface IProductFilter {
  name?: string;
  price?: number;
}
