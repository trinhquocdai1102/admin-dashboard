import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from '../components/Auth/Login';
import HomePage from '../page/Home';
import ProtectedRoutes from './ProtectRoutes';
import PublicRoutes from './PublicRoutes';
import ProductsPage from '../page/Product/Products';
import MainLayout from '../components/Layout/MainLayout';
import { ROUTESNAME } from '.';
import BreadcrumbsC from '../components/Breadcrumb/Breadcrumb';
import SnackbarC from '../components/Snackbar/Snackbar';
import DetailProductPage from '../page/Product/Form/Detail';
import AddProductPage from '../page/Product/Form/Add';
import PageNotFound from '../page/NotFound/NotFound';

const MainRoutes = () => {
  const location = useLocation();

  return (
    <>
      <MainLayout>
        <BreadcrumbsC />
        <Routes location={location}>
          {/** Protected Routes */}
          <Route path={ROUTESNAME.home} element={<ProtectedRoutes />}>
            <Route path={ROUTESNAME.home} element={<HomePage />} />
            <Route path={ROUTESNAME.product} element={<ProductsPage />} />
            <Route path={ROUTESNAME.addProduct} element={<AddProductPage />} />
            <Route path={`${ROUTESNAME.productDetail}/:id`} element={<DetailProductPage />} />
          </Route>

          {/** Public Routes */}
          <Route path={ROUTESNAME.login} element={<PublicRoutes />}>
            <Route path={ROUTESNAME.login} element={<Login />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <SnackbarC duration={6000} />
      </MainLayout>
    </>
  );
};

export default MainRoutes;
