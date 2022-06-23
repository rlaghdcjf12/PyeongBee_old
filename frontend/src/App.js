import styled from 'styled-components';
import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './components/layout/Footer.js';
import Header from './components/layout/Header.js';
import MeMain from './pages/me/main.js';
import YouMain from './pages/you/main.js';
import UsMain from './pages/us/main.js';

function App() {
  const navigate = useNavigate();
  const serviceList = [
    {
      id: 1,
      title: 'ME',
      url: '/me',
      footerMenu: [{ title: 'M1' }, { title: 'M2' }, { title: 'M3' }, { title: 'M4' }],
    },
    {
      id: 2,
      title: 'YOU',
      url: '/you',
      footerMenu: [{ title: '마니또' }, { title: 'M2' }, { title: 'M3' }, { title: '친구들' }],
    },
    {
      id: 3,
      title: 'US',
      url: '/us',
      footerMenu: [{ title: '꽃밭' }, { title: 'M2' }, { title: 'M3' }, { title: '톡' }],
    },
  ];

  let initialService;
  switch (useLocation().pathname) {
    case serviceList[2].url:
      initialService = serviceList[2];
      break;
    case serviceList[1].url:
      initialService = serviceList[1];
      break;
    case serviceList[0].url:
    default:
      initialService = serviceList[0];
      break;
  }
  const [currentService, setCurrentService] = useState(initialService);

  const changeService = (service) => {
    setCurrentService(serviceList[service.id - 1]);
    switch (service.id) {
      case 1:
        navigate('/me');
        break;
      case 2:
        navigate('/you');
        break;
      case 3:
        navigate('/us');
        break;
      default:
    }
  };

  return (
    <AppBase>
      <Header serviceList={serviceList} currentService={currentService} changeService={changeService} />
      <Body>
        <Routes>
          <Route path='/' element={<UsMain />}></Route>
          <Route path={serviceList[0].url} element={<MeMain />}></Route>
          <Route path={serviceList[1].url} element={<YouMain />}></Route>
          <Route path={serviceList[2].url} element={<UsMain />}></Route>
        </Routes>
      </Body>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React !
      </a>
      <br />
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React !
      </a>
      <br />
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React !
      </a>
      <br />
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
