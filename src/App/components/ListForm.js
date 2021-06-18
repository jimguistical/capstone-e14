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
  // getList,
  // deleteList,
} from '../../helpers/data/listData';

function ListForm({
  user, setListArray, listArray, ...listInfo
}) {
  // const [listArray, setListArray] = useState([]);
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

  // useEffect(() => {
  //   getList(user.uid).then((response) => (setListArray(response)));
  // }, []);
  // useEffect(() => {
  //   setListObj({
  //     listID: listInfo.listID || null,
  //     listName: listInfo.listName || '',
  //     uid: user.uid || user
  //   });
  // }, []);
  // console.warn(listObj, 'useEffect on ListFOrm');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (listObj.listID) {
  //     editList(listObj, listObj.listID, user.uid).then((response) => setListArray(response));
  //     console.warn(listObj.listName, 'edit list');
  //   } else {
  //     createList(listObj, user.uid).then((response) => (setListArray(response)));
  //     setListObj({
  //       listID: '',
  //       listName: '',
  //       uid: ''
  //     });
  //     console.warn(listObj, 'you created list');
  //   }
  // };

  const handleClick = (type) => {
    if (type === 'editList') {
      editList(listObj, listObj.listID, user.uid).then((response) => setListArray(response));
    } else if (type === 'create') {
      createList(listObj, user.uid).then((response) => (setListArray(response)));

      // setListObj({
      //   listID: '',
      //   listName: '',
      //   uid: ''
      // });
      // console.warn(listObj, 'you want to CREATE this list');
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
          // placeholder="Create your list"
          value={listObj.listName}
          onChange={handleInputChange}
        />
      </FormGroup>
      {/* <Button color='success' onClick={() => handleClick('create')}>Create List</Button>
      <Button color='warning' onClick={() => handleClick('editList')}>Edit List Name</Button> */}
        {/* <Button color='warning' onClick={() => handleClick('edit')}>Edit List Name</Button> */}
        {
        listArray.length === 0
          ? <Button color='success' onClick={() => handleClick('create')}>Create List</Button>
          : <Button color='warning' onClick={() => handleClick('editList')}>Submit Changes</Button>
        }
        {/* <Button color='secondary' type='submit'>
          Create
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
  setListArray: PropTypes.func,
  listInfo: PropTypes.object
};

export default ListForm;
