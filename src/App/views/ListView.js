import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import {
// createList,
// getList
} from '../../helpers/data/listData';
// import ListCard from '../components/ListCard';
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

  return (
    <>
    <Container>
    {/* <Button color='warning' onClick={() => handleClick()}>Create Your List</Button> */}
      <ListForm
        user={user}
        listArray={listArray}
        setListArray={setListArray}
        // setListObj={setListObj}
        // listObj={listObj}
      />
    {/* <div className='cardsHolder'>
      {listArray.map((cardListObj) => (
        <ListCard
        user={user}
        key={cardListObj.business}
        setListArray={setListArray}
        {...cardListObj}
        />
      ))}
    </div> */}
        </Container>
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
};

export default ListView;
