import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListCard from '../components/ListCard';
import { getList } from '../../helpers/data/siteData';

function ListView({ user }) {
  const [listArray, setListArray] = useState([]);

  useEffect(() => {
    getList(user.uid).then((listArrayResponse) => (setListArray(listArrayResponse)));
  }, []);

  return (
    <div className='cardsHolder'>
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
