import styled from 'styled-components';
import { useState, useEffect } from 'react';
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
  const location = useLocation();

  const serviceList = [
    {
      id: 1,
      title: 'ME',
      baseUrl: '/me',
      url: '/me',
      footerMenu: [
        { title: '자아' },
        // { title: "꿈" },
        { title: '추억' },
        // { title: "분석" },
      ],
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
      footerMenu: [
        { title: '둥지' },
        { title: '내 둥지' },
        // { title: "비네스북" },
        { title: '버즈' },
      ],
    },
  ];

  let initialService = serviceList[0];
  let currentPath = location.pathname;
  useEffect(() => {
    if (currentPath.includes(serviceList[2].baseUrl)) {
      initialService = serviceList[2];
    } else if (currentPath.includes(serviceList[1].baseUrl)) {
      initialService = serviceList[1];
    }
  });
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

  const [locationKeys, setLocationKeys] = useState([]);

  useEffect(() => {
    currentPath = location.pathname;
    // 뒷정리 함수 이용
    console.log('location : ', location);
    console.log('navigate : ', navigate);
    // if (navigate.action === 'PUSH') {
    //   setLocationKeys([location.key]);
    // }
    // if (navigate.action === 'POP') {
    //   if (locationKeys[1] === location.key) {
    //     setLocationKeys(([_, ...keys]) => keys);
    //     // 앞으로 가기
    //   } else {
    //     setLocationKeys((keys) => [location.key, ...keys]);
    //     // 뒤로 가기
    //     navigate.push('/detail');
    //   }
    // }
    // return true;
  }, [locationKeys, location]);

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
