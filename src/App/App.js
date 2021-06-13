import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import './App.scss';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';
import { getAllSites } from '../helpers/data/siteData';

function App() {
  const [user, setUser] = useState(null);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInState) => {
      if (userInState) {
        const userInfoObject = {
          fullName: userInState.displayName,
          uid: userInState.uid,
          userName: userInState.email.split('@')[0]
        };
        setUser(userInfoObject);
        getAllSites().then((sitesArray) => setSites(sitesArray));
      } else if (user || user === null) {
        setUser(false);
        setSites([]);
        getAllSites().then((sitesArray) => (setSites(sitesArray)));
      }
    });
  }, []);

  // useEffect(() => {
  //   getAllSites().then((sitesArray) => (setSites(sitesArray)));
  // }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user}/>
        <Routes
          user={user}
          sites={sites}
          setSites={setSites}
        />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
