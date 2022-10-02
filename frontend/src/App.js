import styled from 'styled-components';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './components/layout/Footer.js';
import Header from './components/layout/Header.js';
import MeMain from './pages/me/main.js';
// import YouMain from './pages/you/main.js';
import UsMain from './pages/us/main.js';
import Stamp from './pages/us/stamp.js';
import HiveDetail from './pages/us/hiveDetail';
import { getService, serviceList } from 'resources/database/services';
import Construction from 'components/common/Construction';

function App() {
  const navigate = useNavigate();
  const [currentService, setCurrentService] = useState(null);

  const changeService = (service) => {
    setCurrentService(getService(service?.id));
  };

  return (
    <AppBase>
      <Header currentService={currentService} changeService={changeService} />
      <Body>
        <Routes>
          <Route path='/us/stamp' element={<Stamp />}></Route>
          {/* <Route path='/' element={<MeMain />}></Route> */}
          <Route path={serviceList[0].url} element={<MeMain />}></Route>
          <Route path={serviceList[1].url} element={<Construction />}></Route>
          <Route path={serviceList[2].url} element={<UsMain />}></Route>
          <Route path={serviceList[2].url + '/detail/:id'} element={<HiveDetail />}></Route>
        </Routes>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React !
        </a>
      </Body>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React !
      </a>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React !
      </a>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React !
      </a>
      <Footer currentService={currentService} />
    </AppBase>
  );
}

const AppBase = styled.div`
  font-family: product-sans, sans-serif;
  text-align: center;
  min-height: 100vh;
  background-color: white;
`;
const Body = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
`;

export default App;
