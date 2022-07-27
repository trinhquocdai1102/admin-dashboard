import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonC from '../../components/Button/Button';

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/', { replace: true });
  };
  return (
    <Box
      sx={{
        height: '500px',
        width: '80%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '4% 0 0',
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        This page is not available
      </Typography>
      <Typography variant="h4" sx={{ padding: '16px 0 32px' }}>
        This link may be broken, or the page may have been removed. Check to see if the link you're
        trying to open is correct
      </Typography>
      <ButtonC
        label="Go to home page"
        handleClick={handleClick}
        boxStyle={{ justifyContent: 'center' }}
        style={{
          background: '#00a8e8!important',
          color: '#fff!important',
          fontWeight: '500!important',
          padding: '12px 20px!important',
        }}
      />
    </Box>
  );
};

export default PageNotFound;
