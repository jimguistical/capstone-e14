import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
// import { Container, Button } from 'reactstrap';
import {
  // createList,
  getList,
  // createList,
  // deleteList,
  // editList,
} from '../../helpers/data/listData';
import ListCard from '../components/ListCard';
import ListForm from '../components/ListForm';
// import ListForm from '../components/ListForm';
// import ListForm from '../components/ListForm';
// import { getList } from '../../helpers/data/listData';
// import ListForm from '../components/ListForm';

function ListView({ user }) {
  // const [listButton, setListButton] = useState(true);
  const [listArray, setListArray] = useState([]);
  // const [listObj, setListObj] = useState({});
  // const [listObj, setListObj] = useState({
  //   listID: listObj.firebaseKey || null,
  //   listName: listObj.listName || '',
  //   uid: user.uid || user
  // });

  // console.warn(listArray, 'ListView useeffect');
  // const handleClick = () => {
  //   createList(listObj, user.uid).then((getList(user.uid).then(setListObj(listObj))));
  //   createList(listObj, user.uid).then((setListObj(listObj)));
  //   console.warn(listObj);
  // };

  // const handleClick = (type) => {
  //   if (type === 'create') {
  //     createList(listObj, user.uid).then((response) => (setListArray(response)));
  //     setListObj(listObj);
  //     console.warn(listObj, 'you want to CREATE this list');

  //     console.warn(listObj.listID, 'you want to delete this list');
  //     deleteList(listObj.listID).then((listArray) => (setListArray(listArray)));
  //   } else if (type === 'create') {
  //     createList(listObj, user.uid).then((listArray) => (setListArray(listArray)));
  //     console.warn(listObj, 'you want to CREATE this list');
  //   }
  // };
  useEffect(() => {
    getList(user.uid).then((response) => (setListArray(response)));

    // setListObj({
    //   listID: listObj.firebaseKey || null,
    //   listName: 'Default List',
    //   uid: user.uid || user
    // });
  }, []);
  // console.warn(listObj, 'you want to CREATE this list');

  return (
    <>
      {/* <Container>
      <Button color='success' onClick={() => handleClick('create')}>Create Your List</Button>
    </Container> */}
    {
        listArray.length === 0
          ? <ListForm
            user={user}
            listArray={listArray}
            setListArray={setListArray}
          />
          : ''
        }

    <div className='cardsHolder'>
      {listArray.map((listInfo) => (
        <ListCard
          user={user}
          key={listInfo.listID}
          listArray={listArray}
          setListArray={setListArray}
          {...listInfo}
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
  setListArray: PropTypes.func
};

export default ListView;
