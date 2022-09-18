import { useState, useEffect, useRef } from 'react';
// import { Container, Image, Navbar, Nav } from 'react-bootstrap';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import styled from 'styled-components';
import {
  Slide,
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Popover,
} from '@mui/material';

import { MdMenu } from 'react-icons/md';

const Header = (props) => {
  const { serviceList, currentService, changeService } = props;
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseMenu = (id) => {
    if (id === null) setAnchorElNav(null);
    else {
      changeService(serviceList[id - 1]);
      setAnchorElNav(null);
    }
  };

  const HideOnScroll = ({ children, window }) => {
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction='down' in={!trigger}>
        {children}
      </Slide>
    );
  };

  const SmallAppBar = () => (
    <StyledToolbar variant='dense' disableGutters sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <ImageWrapper>
        <img alt='logo' src='/images/logo_Bee_lsh_white.png' width='40' height='40' />
      </ImageWrapper>
      <Typography variant='h5'>PyeongBee</Typography>&nbsp;
      <Typography variant='h5'>{currentService.title}</Typography>
      <Box sx={{ marginLeft: 'auto' }}>
        <IconButton size='middle' onClick={(e) => setAnchorElNav(e.currentTarget)} color='inherit'>
          <MdMenu />
        </IconButton>
        <Menu
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id='menu-opened'
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElNav)}
          onClose={() => handleCloseMenu(null)}
        >
          {serviceList.map((service) => (
            <MenuItem key={service.id} onClick={() => handleCloseMenu(service.id)}>
              {service.title}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </StyledToolbar>
  );

  const NormalAppBar = () => (
    <StyledToolbar variant='dense' disableGutters sx={{ display: { xs: 'none', sm: 'flex' } }}>
      <ImageWrapper>
        <img alt='logo' src='/images/logo_Bee_lsh_white.png' width='40' height='40' />
      </ImageWrapper>
      <Typography variant='h5' marginRight='30px'>
        PyeongBee
      </Typography>
      {serviceList.map((service) =>
        service.id === currentService.id ? (
          <Typography key={service.id} variant='h5' marginRight='10px' onClick={() => handleCloseMenu(service.id)}>
            {service.title}&nbsp;
          </Typography>
        ) : (
          <Typography
            key={service.id}
            variant='h6'
            marginRight='20px'
            color='gray'
            onClick={() => handleCloseMenu(service.id)}
          >
            {service.title}&nbsp;
          </Typography>
        )
      )}
    </StyledToolbar>
  );

  return (
    <HideOnScroll {...props}>
      <>
        <EmptyArea />
        <HeaderContainer elevation={0} color='inherit'>
          <Container maxWidth='xl'>
            <SmallAppBar />
            <NormalAppBar />
          </Container>
        </HeaderContainer>
      </>
    </HideOnScroll>
  );
};

// styles
const HeaderContainer = styled(AppBar)`
  border-bottom: solid 2px gold;
`;
const StyledToolbar = styled(Toolbar)`
  min-height: 50px;
`;
const ImageWrapper = styled.div`
  margin-right: 10px;
`;
// const Service = styled(Nav.Item)`
//   margin: 0 10px;
//   font-weight: ${(props) => (props.active === 'true' ? '600' : '0')};
//   font-size: 22px;
//   color: ${(props) => (props.active === 'true' ? 'black' : 'gray')};
//   cursor: pointer;
// `;
const EmptyArea = styled.div`
  height: 50px;
`;

export default Header;
