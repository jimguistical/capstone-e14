/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input, ButtonGroup
} from 'reactstrap';
import {
  createList, editList,
  // deleteList,
  // editList,
  // getList
} from '../../helpers/data/listData';

function ListForm({ user, listArray, setListArray }) {
  // const [listArray, setListArray] = useState([]);
  const [listObj, setListObj] = useState({
  // listID: listObj.firebaseKey || null,
  // listName: listObj.listName || '',
  // uid: user.uid || ''
  });
  useEffect(() => {
    setListObj({
      listID: listObj.firebaseKey || null,
      listName: listObj.listName || 'My List',
      uid: user.uid || user
    });
  }, []);
  // const handleClick = () => {
  //   createList(listObj, user.uid).then(((listArray) => (setListArray(listArray))));
  //   setListObj({
  //     listID: listObj.firebaseKey || null,
  //     listName: 'My List' || listObj.listName,
  //     uid: user.uid || ''
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (listObj.listID) {
  //     editList(listObj, listObj.listID, user.uid).then((listArray) => setListArray(listArray));
  //     console.warn('edit list');
  //   } else if (listObj.listID === null) {
  //     createList(listObj, user.uid).then((listArray) => (setListArray(listArray)));
  //     setListObj({
  //       listID: listObj.firebaseKey || null,
  //       listName: listObj.listName,
  //       uid: user.uid || ''
  //     });
  // console.warn(listObj, 'you created list');
  //   }
  // };

  const handleInputChange = (e) => {
    setListObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = (type) => {
    if (type === 'edit') {
      editList(listObj, listObj.listID, user.uid).then((response) => setListArray(response));
      console.warn(listObj.listID, 'you clicked EDIT');
    } else if (type === 'create') {
      // debugger;
      createList(listObj, user.uid).then((response) => (setListArray(response)));
      console.warn(listObj, 'you want to CREATE this list');
    }
  };

  return (
    <div>
      <Form autoComplete='off' inline
        // onSubmit={handleSubmit}
      >
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        {/* <Label for="listName" className="mr-sm-2">List Name</Label> */}
        <Input type="text" name="listName" id="listName"
          // placeholder="list name"
          value={listObj.listName}
          onChange={handleInputChange}
        />
      </FormGroup>
        <ButtonGroup>
        {
        listArray.length === 0
          ? <Button color='success' onClick={() => handleClick('create')}>Create List</Button>
          : <Button color='warning' onClick={() => handleClick('edit')}>Edit List Name</Button>
        }
        </ButtonGroup>
        {/* <Button color='warning' type='submit'>
          Submit Button
        </Button> */}
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
