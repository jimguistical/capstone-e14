import React, {
  // useEffect,
  // useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input
} from 'reactstrap';
import {
  createList,
  editList
} from '../../helpers/data/listData';

function ListForm({
  user, ...listObj
}) {
  const [listFormObj, setListFormObj] = useState({
    listID: listObj?.listID || null,
    listName: listObj?.listName || 'My List',
    uid: user.uid || user
  });

  // useEffect(() => {

  // });

  const handleInputChange = (e) => {
    setListFormObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = (type) => {
    if (type === 'editList' && listFormObj.listID) {
      editList(listFormObj, listFormObj.listID, user.uid).then((response) => console.warn(response));
      // setListFormObj(response));
    } else if (type === 'create') {
      createList(listFormObj, user.uid).then((response) => (setListFormObj(response)));
    }
  };

  return (
      <>
      <Form autoComplete='off' inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" name="listName" id="listName"
            value={listFormObj.listName}
            onChange={handleInputChange}
          />
        </FormGroup>
        {
          listFormObj.listID === null
            ? <Button color='success' onClick={() => handleClick('create')}
            >Create List</Button>
            : <Button color='warning' onClick={() => handleClick('editList')}>Submit Changes</Button>
        }
    </Form>
    </>
  );
}

ListForm.propTypes = {
  user: PropTypes.any,
  listObj: PropTypes.object,
  setListObj: PropTypes.func,
  // listArray: PropTypes.array,
  // setListArray: PropTypes.func,
  // listInfo: PropTypes.object
};

export default ListForm;
