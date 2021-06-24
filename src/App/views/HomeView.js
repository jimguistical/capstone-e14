import React from 'react';
// import PropTypes from 'prop-types';
import Jumbo from '../components/Jumbo';
import homeBackground from '../../../public/austin-wills--qKP-eGqTw0-unsplash.jpg';

function HomeView() {
  // const [listArray, setListArray] = useState([]);

  return (
    <div>
        <Jumbo
        />
        <div>
          <img src={homeBackground} ></img>
        </div>
    </div>
  );
}

// HomeView.propTypes = {
//   user: PropTypes.any,
// };

export default HomeView;
