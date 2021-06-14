import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
// import { createList, getList } from '../../helpers/data/listData';
import ListCard from '../components/ListCard';
import ListForm from '../components/ListForm';

function ListView({ user }) {
  // const [listButton, setListButton] = useState(true);
  const [listArray, setListArray] = useState([]);
  // const [listObj, setListObj] = useState({
  //   listID: listObj.firebaseKey || null,
  //   listName: listObj.listName || '',
  //   uid: user.uid || user
  // });

  // useEffect(() => {
  //   getList(user.uid).then((listArrayResponse) => (setListObj(listArrayResponse)));
  //   console.warn('useEffect listview', setListObj);
  // }, []);

  // const handleClick = () => {
  //   createList(listObj, user.uid).then((getList(user.uid).then(setListArray(listArray))));
  // };

  return (
    <>
    <Container>
      <ListForm
        user={user}
      />
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
