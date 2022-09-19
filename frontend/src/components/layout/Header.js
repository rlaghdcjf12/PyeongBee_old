import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Slide,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
} from '@mui/material';
import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';
import { serviceList } from 'resources/database/services';
import Spacer from 'components/common/Spacer';
import FlexBox from 'components/common/FlexBox';

const Header = (props) => {
  const { currentService, changeService } = props;
  const location = useLocation();
  const currentPath = location.pathname;
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
    if (id != null) changeService(serviceList[id - 1]);
    setAnchorElNav(null);
  };

  const SmallToolbar = () => (
    <Toolbar variant='dense' disableGutters sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <ImageWrapper>
        <img alt='logo' src='/images/logo_Bee_lsh_white.png' />
      </ImageWrapper>
      <TextWrapper>
        <Typography variant='h6'>PyeongBee</Typography>
        <Spacer axis='horizontal' size={1.5} />
        <Typography variant='h6'>{currentService?.title}</Typography>
      </TextWrapper>
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
            <MenuItem key={service?.id} onClick={() => handleCloseMenu(service.id)}>
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
      <TextWrapper>
        <Typography variant='h5'>PyeongBee</Typography>
        <Spacer axis='horizontal' size={4} />
        {serviceList?.map((service) => (
          <FlexBox key={service?.id}>
            <StyledText
              variant={service.id !== currentService?.id ? 'h6' : 'h5'}
              active={service.id === currentService?.id ? 'true' : 'false'}
              onClick={() => changeService(serviceList[service.id - 1])}
            >
              {service.title}
            </StyledText>
            <Spacer key={'spacer' + service?.id} axis='horizontal' size={4} />
          </FlexBox>
        ))}
      </TextWrapper>
    </Toolbar>
  );

  useEffect(() => {
    if (currentPath.includes(serviceList[2].baseUrl)) {
      changeService(serviceList[2]);
    } else if (currentPath.includes(serviceList[1].baseUrl)) {
      changeService(serviceList[1]);
    } else {
      changeService(serviceList[0]);
    }
  }, []);

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
`;
const TextWrapper = styled(FlexBox)`
  padding-top: 5px;
`;
const ImageWrapper = styled.div`
  margin-right: 10px;
  & img {
    width: 40px;
    height: 40px;
  }
`;
const StyledText = styled(Typography)`
  color: ${(props) => (props.active === 'true' ? 'black' : 'gray')};
  &:hover {
    cursor: pointer;
  }
`;
const EmptyArea = styled.div`
  height: 50px;
`;

export default Header;
