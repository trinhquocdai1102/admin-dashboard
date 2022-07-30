import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import productApi from '../../../api/productApi';
import { ICreateProduct } from '../../../interface/product';
import { getProductDetailAction } from '../../../redux/actions/products';
import { setSnackbarAction } from '../../../redux/actions/snackbar';
import { detailProductSelector } from '../../../redux/selectors';
import '../../../styles/FormProduct.scss';
import { colorSnackbarCustom } from '../../../ultis';
import ProductFormC from '../../../components/Product/Form';

const DetailProductPage = () => {
  const { id } = useParams() as {
    id: string;
  };
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const getProductDetail = useSelector(detailProductSelector);

  const onSubmit = async (data: ICreateProduct) => {
    setLoading(true);
    try {
      const response: any = await productApi.update(data);
      console.log(response);

      setLoading(false);

      dispatch(getProductDetailAction(data));
      dispatch(
        setSnackbarAction({
          color: colorSnackbarCustom.success,
          message: 'Update product successfully',
          open: true,
        })
      );
    } catch (error) {
      setLoading(false);
      dispatch(
        setSnackbarAction({
          color: colorSnackbarCustom.error,
          message: 'Failed to update product',
          open: true,
        })
      );
    }
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      try {
        const response: any = await productApi.detail(id);

        setLoading(false);

        dispatch(getProductDetailAction(response[0]));
      } catch (error) {
        dispatch(
          setSnackbarAction({
            color: colorSnackbarCustom.error,
            message: 'Failed to fetch product detail',
            open: true,
          })
        );
      }
    };
    fetchProductDetail();
  }, [dispatch, id]);

  return (
    <Box className="main-form-product">
      <Box className="title">
        <Typography>Product Detail</Typography>
        <Typography>
          ({' '}
          {getProductDetail?.name.length >= 20
            ? getProductDetail?.name.slice(0, 20) + '...'
            : getProductDetail?.name}{' '}
          )
        </Typography>
      </Box>
      <ProductFormC
        onSubmit={onSubmit}
        loading={loading}
        initialValues={getProductDetail}
        type="update"
      />
    </Box>
  );
};

export default DetailProductPage;
