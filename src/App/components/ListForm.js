/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
// import { editList } from '../../helpers/data/listData';
import {
  createList,
  getList,
  editList
} from '../../helpers/data/listData';

function ListForm({ user }) {
  const [listObj, setListObj] = useState({
    listID: listObj.firebaseKey || null,
    listName: listObj.listName || '',
    uid: user.uid || user
  });

  const handleClick = () => {
    createList(listObj, user.uid).then((getList(user.uid).then(setListObj(listObj))));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listObj.listID) {
      editList(listObj, listObj.listID, user.uid).then((response) => setListObj(response));
    }
  };

  const handleInputChange = (e) => {
    setListObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
        <Button color='warning' onClick={() => handleClick()}>Create Your List</Button>
      <Form autoComplete='off' inline
        onSubmit={handleSubmit}
      >
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="listName" className="mr-sm-2">List Name</Label>
        <Input type="text" name="listName" id="listName"
          placeholder="list name"
          value={listObj.listName}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button>Edit List</Button>
    </Form>
    </div>
  );
}

ListForm.propTypes = {
  user: PropTypes.any,
  listObj: PropTypes.object,
  setListObj: PropTypes.func,
};

export default ListForm;
