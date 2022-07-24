import { Box } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import { IProduct } from '../../interface/product';
import PaginationTable from './Footer';
import TableLabel from './Header';
import ProductTable from './Product';
import '../../styles/Product.scss';

const ProductsPage = () => {
  const [productList, setProductList] = useState<IProduct[]>();
  const [itemPerPage, setItemPerPage] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [isOpacityAll, setOpacityAll] = useState(false);

  const filterTotalItem = productList?.map((item) => item.totalItem);
  const filterTotalItem2 = filterTotalItem?.filter(
    (item, index) => filterTotalItem.indexOf(item) === index
  );
  const totalItem = filterTotalItem2?.toString();

  const count = totalItem && Math.ceil(+totalItem / itemPerPage);

  const handleSelectAll = useCallback((check: boolean) => {
    setProductList((prev) => {
      return prev?.map((item) => {
        return { ...item, checked: check };
      });
    });
  }, []);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: pageNum,
          _limit: itemPerPage,
        };
        const response = await productApi.getAll(params);

        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };
    fetchProductList();
  }, [itemPerPage, pageNum]);

  return (
    <Box className="main-product">
      <TableLabel handleSelectAll={handleSelectAll} />
      {productList?.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <ProductTable product={item} isOpacityAll={isOpacityAll} />{' '}
          </React.Fragment>
        );
      })}
      <PaginationTable
        count={count}
        pageNum={pageNum}
        itemPerPage={itemPerPage}
        setPageNum={setPageNum}
        setItemPerPage={setItemPerPage}
      />
    </Box>
  );
};

export default ProductsPage;
