import { useState, useEffect, useRef } from 'react';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';
import { useWindowScroll } from 'react-use';
import { throttle } from 'lodash';
import styled from 'styled-components';

const Header = ({ currentService, serviceList, changeService }) => {
  const scrollInfo = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHide, setHeaderHide] = useState(false);

  const handleScroll = (lastY, scroll) => {
    if (lastY < scroll.y && scroll.y > 52) {
      setHeaderHide(true);
    } else if (lastY > scroll.y) {
      setHeaderHide(false);
    }
    setLastScrollY(scroll.y);
  };

  const throttled = useRef(
    throttle((lastY, scroll) => handleScroll(lastY, scroll), 100)
  );

  useEffect(() => {
    throttled.current(lastScrollY, scrollInfo);
  }, [scrollInfo, lastScrollY]);

  return (
    <>
      <HeaderContainer
        collapseOnSelect
        expand='sm'
        headerhide={headerHide ? 'true' : 'false'}
      >
        <Container>
          <Logo onClick={() => changeService(serviceList[0])}>
            <Image
              alt='logo'
              src='/images/logo_Bee_lsh_white.png'
              width='40'
              height='40'
            />
            {' PyeongBee'}
          </Logo>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbar
            >
              <Service
                active={currentService?.id === 1 ? 'true' : 'false'}
                onClick={() => changeService(serviceList[0])}
              >
                Me
              </Service>
              {/* <Service
                bold={currentService?.id === 2}
                onClick={() => changeService(serviceList[1])}
              >
                You
              </Service> */}
              <Service
                active={currentService?.id === 3 ? 'true' : 'false'}
                onClick={() => changeService(serviceList[2])}
              >
                Us
              </Service>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </HeaderContainer>
      <EmptyArea />
    </>
  );
};

// styles
const HeaderContainer = styled(Navbar)`
  position: fixed;
  display: ${(props) => (props.headerhide === 'true' ? 'none' : 'block')};
  z-index: 10;
  width: 100vw;
  padding: 0;
  background-color: white;
  border-bottom: solid 2px gold;
`;
const Logo = styled(Navbar.Brand)`
  font-size: 26px;
  line-height: 40px;
  cursor: pointer;
`;
const Service = styled(Nav.Item)`
  margin: 0 10px;
  font-weight: ${(props) => (props.active === 'true' ? '600' : '0')};
  font-size: 22px;
  color: ${(props) => (props.active === 'true' ? 'black' : 'gray')};
  cursor: pointer;
`;
const EmptyArea = styled.div`
  display: ${(props) => (props.headerHide === 'true' ? 'none' : 'block')};
  height: 52px;
`;

export default Header;
