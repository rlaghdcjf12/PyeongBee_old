import styled from 'styled-components';
import { AppBar, Grid, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';

const Footer = ({ currentService }) => {
  const size = currentService?.footerMenu.length;

  const HideOnScroll = ({ children, window }) => {
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction='up' in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <>
      <EmptyArea />
      <HideOnScroll>
        <StyledAppBar elevation={0} color='inherit' sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar variant='dense'>
            <Grid container spacing={2}>
              {currentService?.footerMenu.map((menu, idx) => (
                <Grid item key={idx} xs={12 / size}>
                  <Typography>{menu.title}</Typography>
                </Grid>
              ))}
            </Grid>
          </Toolbar>
        </StyledAppBar>
      </HideOnScroll>
    </>
  );
};

// styles
const StyledAppBar = styled(AppBar)`
  border-top: solid 2px gold;
`;
const EmptyArea = styled.div`
  height: 50px;
`;

export default Footer;
