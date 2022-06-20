import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterEl>
      <nav className='container'>
        <div className='row'>
          <Btn className='col-3'>M1</Btn>
          <Btn className='col-3'>M2</Btn>
          <Btn className='col-3'>M3</Btn>
          <Btn className='col-3'>M4</Btn>
        </div>
      </nav>
    </FooterEl>
  );
};

const FooterEl = styled.footer`
  background-color: #282c34;
  min-height: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: calc(8px + 2vmin);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Btn = styled.div`
  cursor: pointer;
`;

export default Footer;
