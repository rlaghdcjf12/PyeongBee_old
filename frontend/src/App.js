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
import HiveDetail from './pages/us/hiveDetail';

function App() {
  const navigate = useNavigate();
  const serviceList = [
    {
      id: 1,
      title: 'ME',
      baseUrl: '/me',
      url: '/me',
      footerMenu: [{ title: '자아' }, { title: '꿈' }, { title: '추억' }, { title: '분석' }],
    },
    {
      id: 2,
      title: 'YOU',
      baseUrl: '/you',
      url: '/you',
      footerMenu: [{ title: '마니또' }, { title: 'M2' }, { title: 'M3' }, { title: '친구' }],
    },
    {
      id: 3,
      title: 'US',
      baseUrl: '/us',
      url: '/us/hive',
      footerMenu: [{ title: '하이브' }, { title: '내 하이브' }, { title: '비네스북' }, { title: '버즈' }],
    },
  ];

  let initialService;
  const currentPath = useLocation().pathname;
  if (currentPath.includes(serviceList[2].baseUrl)) {
    initialService = serviceList[2];
  } else if (currentPath.includes(serviceList[1].baseUrl)) {
    initialService = serviceList[1];
  } else if (currentPath.includes(serviceList[0].baseUrl)) {
    initialService = serviceList[0];
  } else {
    initialService = serviceList[0];
  }
  const [currentService, setCurrentService] = useState(initialService);

  const changeService = (service) => {
    setCurrentService(serviceList[service.id - 1]);
    switch (service.id) {
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
      <Header serviceList={serviceList} currentService={currentService} changeService={changeService} />
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
