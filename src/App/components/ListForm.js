import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input
} from 'reactstrap';
import {
  createList,
  editList
} from '../../helpers/data/listData';

function ListForm({
  user, setListNameArray, ...listNameInfo
}) {
  const [listFormObj, setListFormObj] = useState({
    listID: listNameInfo?.listID || null,
    listName: listNameInfo?.listName || 'My List',
    uid: user.uid || user
  });

  const handleInputChange = (e) => {
    setListFormObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = (type) => {
    if (type === 'editList') {
      editList(listFormObj, listFormObj.listID, user.uid).then((response) => setListNameArray(response));
    } else if (type === 'create') {
      createList(listFormObj, user.uid).then((response) => (setListNameArray(response)));
    }
  };

  return (
      <>
      <Form autoComplete='off' inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" name="listName" id="listName" bsSize="lg"
            value={listFormObj.listName}
            onChange={handleInputChange}
          />
        {
          listFormObj.listID === null
            ? <Button outline onClick={() => handleClick('create')}
            ><i className="fas fa-plus fa-2x"></i></Button>
            : <Button onClick={() => handleClick('editList')}>Submit</Button>
        }
        </FormGroup>
    </Form>
    </>
  );
}

ListForm.propTypes = {
  user: PropTypes.any,
  setListNameArray: PropTypes.func,
  sitObj: PropTypes.object
};

export default ListForm;
