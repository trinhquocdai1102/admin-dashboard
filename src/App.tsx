import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import MainRoutes from './routing/Routes';
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const history = createBrowserHistory();
type Props = {};

const App: React.FC<Props> = () => {
  return (
    <div>
      {/* <ToastContainer /> */}
      <MainRoutes />
    </div>
  );
};

export default App;
