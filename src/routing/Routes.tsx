import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTESNAME } from '.';
import MainLayout from '../components/Layout/MainLayout';
import ProgressLoading from '../components/Loading/Loading';
import SnackbarC from '../components/Snackbar/Snackbar';
import LoginPage from '../page/Login';
import PageNotFound from '../page/NotFound/NotFound';
import RegisterPage from '../page/Register';
import ProtectedRoutes from './ProtectRoutes';
import PublicRoutes from './PublicRoutes';

const HomePage = React.lazy(() => import('../page/Home'));
const AddProductPage = React.lazy(() => import('../page/Product/Form/Add'));
const DetailProductPage = React.lazy(() => import('../page/Product/Form/Detail'));
const ProductsPage = React.lazy(() => import('../page/Product/List'));

const MainRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Suspense fallback={<ProgressLoading />}>
        <MainLayout>
          <Routes location={location}>
            {/** Protected Routes */}
            <Route path={ROUTESNAME.home} element={<ProtectedRoutes />}>
              <Route path={ROUTESNAME.home} element={<HomePage />} />
              <Route path={ROUTESNAME.product} element={<ProductsPage />} />
              <Route path={ROUTESNAME.addProduct} element={<AddProductPage />} />
              <Route path={`${ROUTESNAME.productDetail}/:id`} element={<DetailProductPage />} />
            </Route>

            {/** Public Routes */}
            <Route path={ROUTESNAME.home} element={<PublicRoutes />}>
              <Route path={ROUTESNAME.login} element={<LoginPage />} />
              <Route path={ROUTESNAME.register} element={<RegisterPage />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <SnackbarC duration={6000} />
        </MainLayout>
      </Suspense>
    </>
  );
};

export default MainRoutes;
