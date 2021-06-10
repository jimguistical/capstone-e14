import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        {/* <Routes/> */}
        {/* jumbo here */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
