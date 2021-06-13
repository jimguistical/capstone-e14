import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ListCard from '../components/ListCard';
import { createList, getList } from '../../helpers/data/listData';

function ListView({ user }) {
  const [listArray, setListArray] = useState([
  ]);

  const handleClick = () => {
    createList(listArray, user.uid).then((getList(user.uid)));
  };

  // useEffect(() => {
  //   getList(user.uid).then((listArrayResponse) => (setListArray(listArrayResponse)));
  // }, []);

  return (
    <div className='cardsHolder'>
      <Button color='warning'
              onClick={() => handleClick()}>Create Your List
      </Button>
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
