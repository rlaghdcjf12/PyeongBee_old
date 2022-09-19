import styled from 'styled-components';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './components/layout/Footer.js';
import Header from './components/layout/Header.js';
import MeMain from './pages/me/main.js';
import YouMain from './pages/you/main.js';
import UsMain from './pages/us/main.js';
import HiveDetail from './pages/us/hiveDetail';
import { getService, serviceList } from 'resources/database/services';

function App() {
  const navigate = useNavigate();
  const [currentService, setCurrentService] = useState(null);

  const changeService = (service) => {
    setCurrentService(getService(service?.id));
    switch (service?.id) {
      case 1:
        navigate(serviceList[0].url);
        break;
      case 2:
        navigate(serviceList[1].url);
        break;
      case 3:
        navigate(serviceList[2].url);
        break;
      default:
    }
  };

  return (
    <AppBase>
      <Header currentService={currentService} changeService={changeService} />
      <Body>
        <Routes>
          <Route path='/' element={<MeMain />}></Route>
          <Route path={serviceList[0].url} element={<MeMain />}></Route>
          <Route path={serviceList[1].url} element={<YouMain />}></Route>
          <Route path={serviceList[2].url} element={<UsMain />}></Route>
          <Route path={serviceList[2].url + '/detail/:id'} element={<HiveDetail />}></Route>
        </Routes>
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
