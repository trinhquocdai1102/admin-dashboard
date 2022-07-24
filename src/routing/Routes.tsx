import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from '../components/Auth/Login';
import HomePage from '../page/Home';
import ProtectedRoutes from './ProtectRoutes';
import PublicRoutes from './PublicRoutes';
import ProductsPage from '../page/Product';
import MainLayout from '../components/Layout/MainLayout';
import { ROUTESNAME } from '.';
import BreadcrumbsC from '../components/Breadcrumb/Breadcrumb';

const MainRoutes = () => {
  const location = useLocation();
  return (
    <MainLayout>
      <BreadcrumbsC />
      <Routes location={location}>
        {/** Protected Routes */}
        <Route path={ROUTESNAME.home} element={<ProtectedRoutes />}>
          <Route path={ROUTESNAME.home} element={<HomePage />} />
          <Route path={ROUTESNAME.product} element={<ProductsPage />} />
        </Route>

        {/** Public Routes */}
        <Route path={ROUTESNAME.login} element={<PublicRoutes />}>
          <Route path={ROUTESNAME.login} element={<Login />} />
        </Route>
      </Routes>
    </MainLayout>
  );
};

export default MainRoutes;
