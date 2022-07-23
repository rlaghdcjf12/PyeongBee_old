import styled from 'styled-components';

const Footer = ({ currentService }) => {
  return (
    <>
      <EmptyArea />
      {currentService?.footerMenu.length > 1 && (
        <FooterEl>
          <nav className='container'>
            <div className='row'>
              <Btn className='col'>{currentService?.footerMenu[0].title}</Btn>
              <Btn className='col'>{currentService?.footerMenu[1].title}</Btn>
              {currentService?.footerMenu.length > 2 && (
                <Btn className='col'>{currentService?.footerMenu[2].title}</Btn>
              )}
              {currentService?.footerMenu.length > 3 && (
                <Btn className='col'>{currentService?.footerMenu[3].title}</Btn>
              )}
            </div>
          </nav>
        </FooterEl>
      )}
    </>
  );
};

// styles
const FooterEl = styled.footer`
  background-color: white;
  border-top: solid 1px gold;
  height: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: saddlebrown;
  font-size: calc(8px + 2vmin);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Btn = styled.div`
  cursor: pointer;
`;
const EmptyArea = styled.div`
  height: 7vh;
`;

export default Footer;
