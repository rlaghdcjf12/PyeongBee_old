import logo from './logo.svg';
import './App.css';
import Footer from './components/layout/Footer.js';
import Header from './components/layout/Header.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React !
      </a>
      <Footer />
    </div>
  );
}

export default App;
