import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import './App.scss';
import Footer from './components/Footer';
import Jumbo from './components/Jumbo';
import NavBar from './components/NavBar';
import getSites from '../helpers/data/siteData';
import Routes from '../helpers/Routes';

function App() {
  const [user, setUser] = useState(null);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    getSites().then((sitesArray) => (setSites(sitesArray)));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInState) => {
      if (userInState) {
        const userInfoObject = {
          fullName: userInState.displayName,
          uid: userInState.uid,
          userName: userInState.email.split('@')[0]
        };
        setUser(userInfoObject);
        // getSites(userInState.uid).then((sitesArray) => setSites(sitesArray));
        console.warn('logged in', sites);
      } else if (user || user === null) {
        console.warn('not logged in', sites);
        setUser(false);
        setSites([]);
      }
    });
  }, []);
  return (
    <div className='App'>
      <Router>
        <NavBar user={user}/>
        <Routes
          user={user}
          sites={sites}
          setSites={setSites}
        />
        <Jumbo/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
