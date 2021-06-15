import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Container, Button } from 'reactstrap';
// import {
//   createList,
//   deleteList,
//   // editList,
//   // getList
// } from '../../helpers/data/listData';
import ListCard from '../components/ListCard';
import ListForm from '../components/ListForm';

function ListView({ user }) {
  // const [listButton, setListButton] = useState(true);
  const [listArray, setListArray] = useState([]);
  // const [listObj, setListObj] = useState({});
  // const [listObj, setListObj] = useState({
  //   listID: listObj.firebaseKey || null,
  //   listName: listObj.listName || '',
  //   uid: user.uid || user
  // });

  // const handleClick = () => {
  //   createList(listObj, user.uid).then((getList(user.uid).then(setListObj(listObj))));
  //   createList(listObj, user.uid).then((setListObj(listObj)));
  //   console.warn(listObj);
  // };

  // const handleClick = (type) => {
  //   if (type === 'delete') {
  //     console.warn(listObj.listID, 'you want to delete this list');
  //     deleteList(listObj.listID).then((listArray) => (setListArray(listArray)));
  //   } else if (type === 'create') {
  //     createList(listObj, user.uid).then((listArray) => (setListArray(listArray)));
  //     console.warn(listObj, 'you want to CREATE this list');
  //   }
  // };

  return (
    <>
    {/* <Container>
      <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
      <Button color='warning' onClick={() => handleClick('create')}>Create List</Button>
      </Container> */}
      <ListForm
        user={user}
        listArray={listArray}
        setListArray={setListArray}
        // setListObj={setListObj}
        // listObj={listObj}
      />
    <div className='cardsHolder'>
      {listArray.map((cardListObj) => (
        <ListCard
        user={user}
        key={cardListObj.business}
        setListArray={setListArray}
        // {...listObj}
        {...cardListObj}
        />
      ))}
    </div>
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  // listObj: PropTypes.object,
  // listArray: PropTypes.array,

};

export default ListView;
