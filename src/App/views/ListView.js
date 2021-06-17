import React, {
  useEffect,
  // useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
// import { Container, Button } from 'reactstrap';
import {
  // createList,
  // deleteList,
  // editList,
  getList
} from '../../helpers/data/listData';
import ListCard from '../components/ListCard';
import ListForm from '../components/ListForm';
// import ListForm from '../components/ListForm';
// import { getList } from '../../helpers/data/listData';
// import ListForm from '../components/ListForm';

function ListView({ user }) {
  // const [listButton, setListButton] = useState(true);
  const [listArray, setListArray] = useState([]);
  const [listObj, setListObj] = useState({});
  // const [listObj, setListObj] = useState({});
  // const [listObj, setListObj] = useState({
  //   listID: listObj.firebaseKey || null,
  //   listName: listObj.listName || '',
  //   uid: user.uid || user
  // });
  useEffect(() => {
    getList(user.uid).then((response) => (setListArray(response)));
    console.warn(setListObj(listObj));
  }, []);
  // console.warn(listArray, 'ListView useeffect');
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
      <ListForm
        user={user}
        listArray={listArray}
        setListArray={setListArray}
        // setListObj={setListObj}
        // listObj={listObj}
      />
    {/* <Container>
      <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
      <Button color='warning' onClick={() => handleClick('create')}>Create List</Button>
      </Container> */}
    <div className='cardsHolder'>
      {listArray.map((listCardObj) => (
        <ListCard
        user={user}
        key={listCardObj.listID}
        setListArray={setListArray}
        listArray={listArray}
        {...listCardObj}
        />
      ))}
        <h3>
          { listArray.length === 0
            ? 'Please Create a List or Browse Service Sites'
            : ''
          }
        </h3>
    </div>
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  listArray: PropTypes.array,
  setListArray: PropTypes.func,
  listObj: PropTypes.object,
  setListObj: PropTypes.func

};

export default ListView;
