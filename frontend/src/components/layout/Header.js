import styled from 'styled-components';

const Header = ({ currentService, serviceList, changeService }) => {
  return (
    <HeaderEl>
      <div className='container'>
        <FirstHeader className='row'>
          <div className='col-3'>PyeongBee</div>
          <div className='col-1 offset-6'>1</div>
          <div className='col-1'>2</div>
          <div className='col-1'>3</div>
        </FirstHeader>
        <SecondHeader className='row'>
          <div className='col-2' onClick={() => changeService(serviceList[0])}>
            {currentService?.id === 1 ? <Active>{serviceList[0].title}</Active> : <Btn>{serviceList[0].title}</Btn>}
          </div>
          <div className='col-2' onClick={() => changeService(serviceList[1])}>
            {currentService?.id === 2 ? <Active>{serviceList[1].title}</Active> : <Btn>{serviceList[1].title}</Btn>}
          </div>
          <div className='col-2' onClick={() => changeService(serviceList[2])}>
            {currentService?.id === 3 ? <Active>{serviceList[2].title}</Active> : <Btn>{serviceList[2].title}</Btn>}
          </div>
        </SecondHeader>
      </div>
    </HeaderEl>
  );
};

// styles
const HeaderEl = styled.header`
  position: relative;
  background-color: white;
  border-bottom: solid 1px gold;
  min-height: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: saddlebrown;
  font-size: calc(7px + 2vmin);
`;
const FirstHeader = styled.div`
  /* position: fixed; */
`;
const SecondHeader = styled.nav`
  /* position: fixed; */
`;
const Active = styled.span`
  font-size: calc(6px + 2vmin);
  font-weight: 600;
  cursor: pointer;
`;
const Btn = styled.span`
  color: lightgray;
  font-size: calc(6px + 2vmin);
  cursor: pointer;
`;

export default Header;
