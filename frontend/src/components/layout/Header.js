import styled from 'styled-components';

const Header = (props) => {
  const { currentService, serviceList, changeService } = props;

  return (
    <HeaderEl>
      <div className='container'>
        <nav className='row'>
          <div className='col-3' onClick={() => changeService(0)}>
            평비&nbsp;
            {currentService === serviceList[0] ? <Active>ME</Active> : <Btn>ME</Btn>}
          </div>
          <div className='col-2' onClick={() => changeService(1)}>
            {currentService === serviceList[1] ? <Active>YOU</Active> : <Btn>YOU</Btn>}
          </div>
          <div className='col-2' onClick={() => changeService(2)}>
            {currentService === serviceList[2] ? <Active>US</Active> : <Btn>US</Btn>}
          </div>
          <div className='col-2'></div>
          <div className='col-1'></div>
          <div className='col-1'></div>
          <div className='col-1'></div>
        </nav>
      </div>
    </HeaderEl>
  );
};

// styles
const HeaderEl = styled.header`
  background-color: white;
  border-bottom: solid 1px gold;
  min-height: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: saddlebrown;
  font-size: calc(8px + 2vmin);
`;
const Active = styled.span`
  font-size: calc(6px + 2vmin);
  font-weight: 600;
  cursor: pointer;
`;
const Btn = styled.span`
  font-size: calc(6px + 2vmin);
  cursor: pointer;
`;

export default Header;
