import { useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import styled from 'styled-components';
import { Slide, AppBar, Toolbar, Typography, Container, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { MdMenu } from 'react-icons/md';
import Spacer from 'components/common/Spacer';

const Header = (props) => {
  const { serviceList, currentService, changeService } = props;
  const [anchorElNav, setAnchorElNav] = useState(null);

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

  const handleCloseMenu = (id) => {
    if (id === null) setAnchorElNav(null);
    else {
      changeService(serviceList[id - 1]);
      setAnchorElNav(null);
    }
  };

  const SmallToolbar = () => (
    <Toolbar variant='dense' disableGutters sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <ImageWrapper>
        <img alt='logo' src='/images/logo_Bee_lsh_white.png' width='40' height='40' />
      </ImageWrapper>
      <Typography variant='h5'>PyeongBee</Typography>
      <Spacer axis='horizontal' size={1.5} />
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
    </Toolbar>
  );

  const NormalToolbar = () => (
    <Toolbar variant='dense' disableGutters sx={{ display: { xs: 'none', sm: 'flex' } }}>
      <ImageWrapper>
        <img alt='logo' src='/images/logo_Bee_lsh_white.png' />
      </ImageWrapper>
      <Typography variant='h5'>PyeongBee</Typography>
      <Spacer axis='horizontal' size={4} />
      {serviceList.map((service) => (
        <>
          <Typography
            key={service.id}
            variant={service.id !== currentService.id ? 'h6' : 'h5'}
            color={service.id !== currentService.id && 'gray'}
            onClick={() => changeService(serviceList[service.id - 1])}
          >
            {service.title}
          </Typography>
          <Spacer axis='horizontal' size={1.5} />
        </>
      ))}
    </Toolbar>
  );

  return (
    <>
      <EmptyArea />
      <HideOnScroll {...props}>
        <StyledAppBar elevation={0} color='inherit'>
          <Container maxWidth='xl'>
            <SmallToolbar />
            <NormalToolbar />
          </Container>
        </StyledAppBar>
      </HideOnScroll>
    </>
  );
};

// styles
const StyledAppBar = styled(AppBar)`
  border-bottom: solid 2px gold;
  text-align: center;
`;
const ImageWrapper = styled.div`
  margin-right: 10px;
  & img {
    width: 40px;
    height: 40px;
  }
`;
const EmptyArea = styled.div`
  height: 50px;
`;

export default Header;
