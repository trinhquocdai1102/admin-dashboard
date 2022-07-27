import { Box } from '@mui/material';
import React, { useState } from 'react';
import '../../../../styles/FormProduct.scss';
import { ICreateProduct } from '../../../../interface/product';
import productApi from '../../../../api/productApi';
import { useDispatch } from 'react-redux';
import { setSnackbarAction } from '../../../../redux/actions/snackbar';
import { colorSnackbarCustom } from '../../../../ultis';
import ProductForm from '../Form';
import { ROUTESNAME } from '../../../../routing';
import { useNavigate } from 'react-router-dom';

const AddProductPage = () => {
  const initialValues: ICreateProduct = {
    categoryId: '',
    id: '',
    name: '',
    description: '',
    price: '',
    color: '',
    amount: '',
    thumbnailUrl: '',
  };
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: ICreateProduct) => {
    setLoading(true);
    try {
      const response: any = await productApi.create(data);
      console.log(response);

      setLoading(false);

      await dispatch(
        setSnackbarAction({
          color: colorSnackbarCustom.success,
          message: 'Create product successfully',
          open: true,
        })
      );

      navigate(`${ROUTESNAME.productDetail}/${data.id}`);
    } catch (error) {
      setLoading(false);
      await dispatch(
        setSnackbarAction({
          color: colorSnackbarCustom.error,
          message: `The ID must be unique`,
          open: true,
        })
      );
    }
  };

  return (
    <Box className="main-form-product">
      <Box className="title">Add Product</Box>
      <ProductForm onSubmit={onSubmit} loading={loading} type="add" initialValues={initialValues} />
    </Box>
  );
};

export default AddProductPage;
