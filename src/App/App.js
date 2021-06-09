import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        {/* <Routes/> */}
        {/* footer and jumbo too */}
      </Router>
    </div>
  );
}

export default App;
