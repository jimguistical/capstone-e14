import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import './App.scss';
import { getSites } from '../helpers/data/siteData';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';

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
        getSites().then((sitesArray) => setSites(sitesArray));
      } else if (user || user === null) {
        setUser(false);
        setSites([]);
        getSites().then((sitesArray) => (setSites(sitesArray)));
      }
    });
  }, []);

  // useEffect(() => {
  //   getSites().then((sitesArray) => (setSites(sitesArray)));
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
