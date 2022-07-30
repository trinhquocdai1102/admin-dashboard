import axiosClient from './axiosClient';

const authApi = {
  getUser: () => {
    const url = '/auth';
    return axiosClient.get(url);
  },
  addUser: (data: any) => {
    const url = '/auth';
    return axiosClient.post(url, data);
  },
};
export default authApi;
