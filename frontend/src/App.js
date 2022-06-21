import styled from 'styled-components';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/layout/Footer.js';
import Header from './components/layout/Header.js';

function App() {
  const serviceList = ['평비 me', '평비 you', '평비 we'];
  const [currentService, setCurrentService] = useState(serviceList[2]);

  const changeService = (v) => {
    setCurrentService(serviceList[v]);
  };

  return (
    <AppBase className='App'>
      <Header serviceList={serviceList} currentService={currentService} changeService={changeService} />
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
  text-align: center;
  min-height: 100vh;
  background-color: white;
`;

export default App;
