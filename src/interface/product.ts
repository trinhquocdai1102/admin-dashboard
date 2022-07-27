export interface IProduct {
  categoryId: string;
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  amount: string;
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string;
  checked: boolean;
}

export interface ICreateProduct {
  categoryId: string;
  id: string;
  name: string;
  description: string;
  price: number | string;
  color: string;
  amount: number | string;
  thumbnailUrl: string;
}

export interface IProductFilter {
  name?: string;
  price?: number;
}
