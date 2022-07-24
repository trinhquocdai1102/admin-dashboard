import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import { sidebarList } from './MenuList';
import { Box } from '@mui/material';
import '../../../styles/Menu.scss';

const MenuComponent = () => {
  return (
    <Box className="main-menu">
      <List className="container" component="nav" aria-label="main mailbox folders">
        {sidebarList.map((item: any) => {
          return (
            <NavLink key={item.id} to={item.link} className="navLink">
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Box>
  );
};

export default MenuComponent;
