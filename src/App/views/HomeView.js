import React from 'react';
import PropTypes from 'prop-types';
import Jumbo from '../components/Jumbo';
// import styled from 'styled-components';
// import homeBackground from '../../assets/austin-wills--qKP-eGqTw0-unsplash.jpg';

// const BackgroundImg = styled.img`
//   backgroundImage: url(${homeBackground})
//   width: 100%;
//   height: 100%;
//   background-position: center;
// `;

function HomeView({ user }) {
  return (
  <div>
      <Jumbo user={user}
      />
  </div>
  );
}

HomeView.propTypes = {
  user: PropTypes.any,
};

export default HomeView;
