import axiosClient from './axiosClient';

const productApi = {
  getParams: (params: any) => {
    const url = '/products';
    return axiosClient.get(url, { params });
  },

  getAll: () => {
    const url = '/products';
    return axiosClient.get(url);
  },

  detail: (id: any) => {
    const url = `/products?id=${id}`;
    return axiosClient.get(url);
  },

  delete: (id: any) => {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },

  create: (data: any) => {
    const url = `/products`;
    return axiosClient.post(url, data);
  },

  update: (data: any) => {
    const url = `/products/${data.id}`;
    return axiosClient.put(url, data);
  },
};
export default productApi;
