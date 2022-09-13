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
} from '@mui/material';
import { MdMenu } from 'react-icons/md';
import FlexBox from 'components/common/FlexBox';

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
    <Toolbar variant='dense' disableGutters sx={{ display: { xs: 'flex', md: 'none' } }}>
      <ImageWrapper>
        <img alt='logo' src='/images/logo_Bee_lsh_white.png' width='40' height='40' />
      </ImageWrapper>
      <Typography variant='h6' component='div'>
        PyeongBee
      </Typography>
      <Box>
        <IconButton
          size='middle'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
          color='inherit'
        >
          <MdMenu />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <MenuItem key={1} onClick={handleCloseNavMenu}>
            <Typography textAlign='center'>Me</Typography>
          </MenuItem>
          <MenuItem key={1} onClick={handleCloseNavMenu}>
            <Typography textAlign='center'>Us</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Toolbar>
  );

  const NormalAppBar = () => (
    <Toolbar variant='dense' disableGutters sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <ImageWrapper>
        <img alt='logo' src='/images/logo_Bee_lsh_white.png' width='40' height='40' />
      </ImageWrapper>
      <Typography variant='h6' component='div'>
        PyeongBee
      </Typography>
      <Box>
        <Button key={1} onClick={handleCloseNavMenu}>
          <Typography textAlign='center'>Me</Typography>
        </Button>
        <Button key={2} onClick={handleCloseNavMenu}>
          <Typography textAlign='center'>Us</Typography>
        </Button>
      </Box>
    </Toolbar>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar elevation={0}>
          <HeaderContainer maxWidth='xl'>
            <SmallAppBar />
            <NormalAppBar />
          </HeaderContainer>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

// styles
const HeaderContainer = styled(Container)`
  background-color: white;
  border-bottom: solid 2px gold;
  color: black;
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
// const EmptyArea = styled.div`
//   display: ${(props) => (props.headerHide === 'true' ? 'none' : 'block')};
//   height: 52px;
// `;

export default Header;
