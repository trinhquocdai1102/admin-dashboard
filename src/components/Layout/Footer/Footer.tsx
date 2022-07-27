import { Container, Box, List, ListItem } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube, Map, Phone, Mail } from '@material-ui/icons';
import React from 'react';
import '../../../styles/Footer.scss';
import { Link } from 'react-router-dom';
import ButtonMailPhoneto from '../../ButtonMailPhoneto/ButtonMailPhoneto';

const Footer = () => {
  return (
    <Box className="main-footer">
      <Container className="container">
        <Box className="section aboutus">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis
            hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit
            amet massa.
          </p>
          <List className="social">
            <ListItem>
              <Link to="/">
                <Facebook />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <Twitter />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <Instagram />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <YouTube />
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box className="section quickLinks">
          <h2>Quick Links</h2>
          <List>
            <ListItem>
              <Link to="/">About</Link>
            </ListItem>
            <ListItem>
              <Link to="/">FAQ</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Help</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Terms & Conditions</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Contact</Link>
            </ListItem>
          </List>
        </Box>
        <Box className="section contact">
          <h2>Contact Info</h2>
          <List className="info">
            <ListItem>
              <span>
                <Map />
              </span>
              <span>
                Ho Tung Mau Street, Phu Dien Ward, Bac Tu Liem District, Ha Noi City, Viet Nam
              </span>
            </ListItem>
            <ListItem>
              <span>
                <Phone />
              </span>
              <span>
                <ButtonMailPhoneto label="0865763258" to="tel:0865763258" />
              </span>
            </ListItem>
            <ListItem>
              <span>
                <Mail />
              </span>
              <span>
                <ButtonMailPhoneto
                  label="trinhquocdai1102@gmail.com"
                  to="mailto:trinhquocdai1102@gmail.com"
                />
              </span>
            </ListItem>
          </List>
        </Box>
      </Container>
      <Box className="copyrightText">
        <p>
          &copy;{new Date().getFullYear()} Quoc Dai | All rights reserved | Terms Of Service |
          Privacy
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
