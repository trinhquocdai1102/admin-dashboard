import React from 'react';
import MainRoutes from './routing/Routes';
import './styles/Global.scss';
type Props = {};

const App: React.FC<Props> = () => {
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
