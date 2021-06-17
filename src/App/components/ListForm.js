/* eslint-disable no-use-before-define */
import React, {
  // useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input
} from 'reactstrap';
import {
  createList,
  editList,
  // deleteList,
  // getList
} from '../../helpers/data/listData';

function ListForm({
  user, listArray, setListArray, ...listInfo
}) {
  // const [listArray, setListArray] = useState([]);
  const [listObj, setListObj] = useState({
    listID: listInfo.firebaseKey || null,
    listName: listInfo.listName || '',
    uid: user.uid || user
  });

  const handleInputChange = (e) => {
    setListObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  // useEffect(() => {
  // setListObj({
  //   listID: listInfo.firebaseKey || null,
  //   listName: listInfo.listName || 'My List',
  //   uid: user.uid || user
  // });
  // console.warn(listObj, 'useEffect on ListFOrm');
  // }, []);
  // const handleClick = () => {
  //   createList(listObj, user.uid).then(((listArray) => (setListArray(listArray))));
  //   setListObj({
  //     listID: listObj.firebaseKey || null,
  //     listName: 'My List' || listObj.listName,
  //     uid: user.uid || ''
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listInfo.listID) {
      editList(listObj, listInfo.listID, user.uid).then((response) => setListArray(response));
      console.warn(listInfo.listName, 'edit list');
    } else {
      createList(listObj, user.uid).then((response) => (setListArray(response)));
      setListObj({
        listID: '',
        listName: '',
        uid: ''
      });
      console.warn(listInfo, 'you created list');
    }
  };

  // const handleClick = (type) => {
  //   if (type === 'edit') {
  //     editList(listInfo, listInfo.listID, user.uid).then((response) => setListArray(response));
  //     console.warn(listInfo.listID, 'you clicked EDIT');
  //   } else if (type === 'create') {
  //     createList(listObj, user.uid).then((response) => (setListArray(response)));
  //     console.warn(listInfo, 'you want to CREATE this list');
  //   }
  // };

  return (
    <div>
      <Form autoComplete='off' inline
        onSubmit={handleSubmit}
      >
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        {/* <Label for="listName" className="mr-sm-2">List Name</Label> */}
        <Input type="text" name="listName" id="listName"
          placeholder="Create your list"
          value={listInfo.listName}
          onChange={handleInputChange}
        />
      </FormGroup>
        {/* <ButtonGroup> */}
        {/* <Button color='warning' onClick={() => handleClick('edit')}>Edit List Name</Button> */}
        {/* {
        listArray.length === 0
          ? <Button color='success' onClick={() => handleClick('create')}>Create List</Button>
          : <Button color='warning' onClick={() => handleClick('edit')}>Edit List Name</Button>
        } */}
        {/* </ButtonGroup> */}
        <Button color='secondary' type='edit'>
          Submit
        </Button>
    </Form>
    </div>
  );
}

ListForm.propTypes = {
  user: PropTypes.any,
  listObj: PropTypes.object,
  setListObj: PropTypes.func,
  listArray: PropTypes.array,
  setListArray: PropTypes.func
};

export default ListForm;
