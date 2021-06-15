/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import {
  createList,
  deleteList,
  // editList,
  getList
} from '../../helpers/data/listData';

function ListForm({ user, setListArray }) {
  const [listObj, setListObj] = useState({
    // listID: listObj.firebaseKey || null,
    // listName: listObj.listName || '',
    // uid: user.uid || ''
  });
  useEffect(() => {
    setListObj({
      listID: listObj.firebaseKey || null,
      listName: listObj.listName || '',
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

  useEffect(() => {
    getList().then((listArray) => (setListArray(listArray)));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    console.warn(listObj, 'you created list');
  //   }
  };
  const handleClick = (type) => {
    if (type === 'delete') {
      console.warn(listObj.listID, 'you want to delete this list');
      deleteList(listObj.listID).then((listArray) => (setListArray(listArray)));
    } else if (type === 'create') {
      createList(listObj, user.uid).then((listArray) => (setListArray(listArray)));
      console.warn(listObj, 'you want to CREATE this list');
    }
  };

  const handleInputChange = (e) => {
    setListObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div>
      <Button color='primary' onClick={() => handleClick('create')}>Create</Button>
      <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
      <Form autoComplete='off' inline
        onSubmit={handleSubmit}
      >
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="listName" className="mr-sm-2">List Name</Label>
        <Input type="text" name="listName" id="listName"
          placeholder="list name"
          value={listObj.listName || ''}
          onChange={handleInputChange}
        />
      </FormGroup>
        <Button color='warning' type='submit'>
          Submit Button
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
