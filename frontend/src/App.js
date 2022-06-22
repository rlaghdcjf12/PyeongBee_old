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

function App() {
  const navigate = useNavigate();
  const serviceList = ['평비 me', '평비 you', '평비 we'];
  const [currentService, setCurrentService] = useState(serviceList[2]);

  const changeService = (v) => {
    setCurrentService(serviceList[v]);
    switch (v) {
      case 0:
        navigate('/me');
        break;
      case 1:
        navigate('/you');
        break;
      case 2:
        navigate('/us');
        break;
      default:
    }
  };

  return (
    <AppBase className='App'>
      <Header serviceList={serviceList} currentService={currentService} changeService={changeService} />
      <Routes>
        <Route path='/' element={<UsMain />}></Route>
        <Route path='/me' element={<MeMain />}></Route>
        <Route path='/you' element={<YouMain />}></Route>
        <Route path='/us' element={<UsMain />}></Route>
      </Routes>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React !
      </a>
      <Footer />
    </AppBase>
  );
}

const AppBase = styled.div`
  font-family: product-sans, sans-serif;
  text-align: center;
  min-height: 100vh;
  background-color: white;
`;

export default App;
