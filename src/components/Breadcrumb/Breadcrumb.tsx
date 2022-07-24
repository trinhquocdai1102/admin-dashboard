import * as React from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/Breadcrumb.scss';
import { Home } from '@material-ui/icons';

const BreadcrumbsC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const pathnames = pathname.split('/').filter((x) => x !== 'admin' && x !== '');

  return (
    <div className="custom-breadcrumb" role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link className="gohome" onClick={() => navigate('/', { replace: true })}>
          <span>
            <Home />
          </span>
          <span>home</span>
        </Link>
        {pathnames.map((name, index) => {
          const route = `${[pathnames.slice(0, index + 1).join('/')]}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography>{name}</Typography>
          ) : (
            <Link key={index} onClick={() => navigate(route, { replace: true })}>
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsC;
