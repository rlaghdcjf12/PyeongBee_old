import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderEl>
      <div className='container'>
        <nav className='row'>
          <Btn className='col-3'>PyeongBee</Btn>
          <Btn className='col-2 offset-3'>M1</Btn>
          <Btn className='col-2'>M2</Btn>
          <Btn className='col-2'>M3</Btn>
        </nav>
      </div>
    </HeaderEl>
  );
};

const HeaderEl = styled.header`
  background-color: #282c34;
  min-height: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: calc(10px + 2vmin);
`;

const Btn = styled.div`
  cursor: pointer;
`;

export default Header;
