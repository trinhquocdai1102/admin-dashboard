import React, { FC, PropsWithChildren } from 'react';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
import { styled } from '@mui/material/styles';
import MenuComponent from './Menu/Menu';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeaderNavbar from './Header/HeaderNavbar';
import { navbarHeight, menuWidth } from '../../ultis';
import Footer from './Footer/Footer';

interface Props extends PropsWithChildren {}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12}>
            <HeaderNavbar />
          </Grid>
          <Grid item xs={2} sx={{ marginTop: navbarHeight }}>
            <MenuComponent />
          </Grid>
          <Grid item xs={10} sx={{ marginTop: navbarHeight }}>
            {children}
          </Grid>
          <Grid item xs={12} sx={{ marginLeft: menuWidth }}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainLayout;
