import { Box } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import PaginationTableC from '../../../components/Product/Pagination';
import TableLabelC from '../../../components/Product/Header';
import ProductTableC from '../../../components/Product/Product';
import '../../../styles/Product.scss';
import { IProduct } from '../../../interface/product';
import ButtonC from '../../../components/Button/Button';
import { ROUTESNAME } from '../../../routing';
import ProgressLoading from '../../../components/Loading/Loading';
import productApi from '../../../api/productApi';
import { useNavigate } from 'react-router-dom';
import { setSnackbarAction } from '../../../redux/actions/snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { colorSnackbarCustom } from '../../../ultis';
import { productWithParamSelector } from '../../../redux/selectors';
import {
  getAllProductsWithParamsAction,
  getAllProductsAction,
} from '../../../redux/actions/products';

const ProductsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [productList, setProductList] = useState<IProduct[]>();
  const [itemPerPage, setItemPerPage] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [isOpacityAll, setOpacityAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalItem, setTotalItem] = useState(0);

  const getAllProductsWithParam = useSelector(productWithParamSelector);

  const count = totalItem && Math.ceil(+totalItem / itemPerPage);

  const handleSelectAll = useCallback((check: boolean) => {
    // setProductList((prev) => {
    //   return prev?.map((item) => {
    //     return { ...item, checked: check };
    //   });
    // });
    console.log('selected all');
  }, []);

  const handleDeleteItem = async (id: any) => {
    setLoading(true);
    try {
      const response: any = await productApi.delete(id);
      console.log(response);

      const params = {
        _page: pageNum,
        _limit: itemPerPage,
      };
      const newResponse: any = await productApi.getParams(params);

      setLoading(false);

      setTotalItem(newResponse.pagination._totalRows);
      dispatch(getAllProductsWithParamsAction(newResponse.data));
      dispatch(
        setSnackbarAction({
          color: colorSnackbarCustom.success,
          message: 'Delete product successfully',
          open: true,
        })
      );
    } catch (error) {
      dispatch(
        setSnackbarAction({
          color: colorSnackbarCustom.error,
          message: 'Failed to delete product',
          open: true,
        })
      );
    }
  };

  useEffect(() => {
    const fetchProductList = async () => {
      setLoading(true);
      try {
        const params = {
          _page: pageNum,
          _limit: itemPerPage,
        };
        const response: any = await productApi.getParams(params);
        const newResponse: any = await productApi.getAll();

        setLoading(false);

        dispatch(getAllProductsWithParamsAction(response.data));
        dispatch(getAllProductsAction(newResponse));
        setTotalItem(response.pagination._totalRows);
      } catch (error) {
        dispatch(
          setSnackbarAction({
            color: colorSnackbarCustom.error,
            message: 'Failed to fetch product list',
            open: true,
          })
        );
      }
    };
    fetchProductList();
  }, [dispatch, itemPerPage, pageNum]);

  useEffect(() => {
    setTotalItem(totalItem);
  }, [totalItem]);

  return (
    <Box className="main-product">
      <ButtonC
        label="add product"
        className="addButton"
        variant="contained"
        handleClick={() => navigate(ROUTESNAME.addProduct)}
      />
      <TableLabelC handleSelectAll={handleSelectAll} />
      {loading ? (
        <ProgressLoading height="500px" />
      ) : (
        getAllProductsWithParam?.map((item: IProduct) => {
          return (
            <React.Fragment key={item.id}>
              <ProductTableC
                product={item}
                isOpacityAll={isOpacityAll}
                handleDeleteItem={handleDeleteItem}
              />
            </React.Fragment>
          );
        })
      )}
      <PaginationTableC
        count={count}
        setPageNum={setPageNum}
        totalItem={totalItem}
        setItemPerPage={setItemPerPage}
      />
    </Box>
  );
};

export default ProductsPage;
