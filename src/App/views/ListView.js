import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListCard from '../components/ListCard';

function ListView({ user }) {
  const [listArray, setListArray] = useState([]);

  return (
    <div className='listHolder'>
      {listArray.map((listObj) => (
        <ListCard
        user={user}
        key={listObj.firebaseKey}
        setListArray={setListArray}
        {...listObj}
        />
      ))}
    </div>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  listArray: PropTypes.array,
  setListArray: PropTypes.func

};

export default ListView;
