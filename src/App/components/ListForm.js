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
  editList
} from '../../helpers/data/listData';

function ListForm({
  user, setListArray, listArray, ...listInfo
}) {
  const [listObj, setListObj] = useState({
    listID: listInfo?.listID || null,
    listName: listInfo?.listName || 'My List',
    uid: user.uid || user
  });

  const handleInputChange = (e) => {
    setListObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = (type) => {
    if (type === 'editList') {
      editList(listObj, listObj.listID, user.uid).then((response) => setListArray(response));
    } else if (type === 'create') {
      createList(listObj, user.uid).then((response) => (setListObj(response)));
    }
  };

  return (
    <div>
      <Form autoComplete='off' inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" name="listName" id="listName"
            value={listObj.listName}
            onChange={handleInputChange}
          />
        </FormGroup>
        {
          listObj.listID === null
            ? <Button color='success' onClick={() => handleClick('create')}
            >Create List</Button>
            : <Button color='warning' onClick={() => handleClick('editList')}>Submit Changes</Button>
        }
    </Form>
    </div>
  );
}

ListForm.propTypes = {
  user: PropTypes.any,
  listObj: PropTypes.object,
  setListObj: PropTypes.func,
  listArray: PropTypes.array,
  setListArray: PropTypes.func,
  listInfo: PropTypes.object
};

export default ListForm;
