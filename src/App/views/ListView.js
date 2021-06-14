import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'reactstrap';
import { createList, getList } from '../../helpers/data/listData';
import ListCard from '../components/ListCard';

function ListView({ user }) {
  // const [listButton, setListButton] = useState(true);
  const [listArray, setListArray] = useState([]);
  const [listObj, setListObj] = useState({
    // listID: listObj.firebaseKey || null,
    uid: user.uid || user
  });

  useEffect(() => {
    getList(user.uid).then((listArrayResponse) => (setListObj(listArrayResponse)));
    // console.warn('useEffect listview', setListObj);
  }, []);

  const handleClick = () => {
    createList(listObj, user.uid).then((getList(user.uid).then(setListArray(listArray))));
  };

  return (
    <>
    <Container>
      <Button color='warning'
              onClick={() => handleClick()}>Create Your List
      </Button>
    <div className='cardsHolder'>
      {listArray.map((cardListObj) => (
        <ListCard
        user={user}
        key={cardListObj.business}
        setListArray={setListArray}
        {...cardListObj}
        />
      ))}
    </div>
        </Container>
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  listArray: PropTypes.array,
  setListArray: PropTypes.func
};

export default ListView;
