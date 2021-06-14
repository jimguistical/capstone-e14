import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { createList, getList } from '../../helpers/data/listData';

function ListForm({ user }) {
  const [listObj, setListObj] = useState({
    // listID: listObj.firebaseKey || null,
    // listName: listObj.listName || '',
    uid: user.uid || user
  });

  const handleInputChange = (e) => {
    setListObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = () => {
    createList(listObj, user.uid).then((getList(user.uid).then(setListArray(listArray))));
  };
  return (
    <div>
      <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="listName" className="mr-sm-2">List Name</Label>
        <Input type="text" name="email" id="listName"
          placeholder="list name"
          value={listObj.listName}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button>Submit</Button>
      <Button color='warning'
              onClick={() => handleClick()}>Create Your List
      </Button>
    </Form>
    </div>
  );
}

ListForm.propTypes = {
  user: PropTypes.any,

};

export default ListForm;
