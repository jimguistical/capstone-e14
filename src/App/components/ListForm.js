/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input
} from 'reactstrap';
import {
  // createList,
  // deleteList,
  editList,
  // getList
} from '../../helpers/data/listData';

function ListForm({
  user, listArray, setListArray, setListObj, listObj, ...listInfo
}) {
  // const [listArray, setListArray] = useState([]);
  // const [listObj, setListObj] = useState({
  // listID: listObj.firebaseKey || null,
  // listName: listObj.listName || '',
  // uid: user.uid || ''
  // });
  useEffect(() => {
    setListObj({
      listID: listInfo.firebaseKey || null,
      listName: listInfo.listName || 'My List',
      uid: user.uid || user
    });
    console.warn(listObj, 'useEffect on ListFOrm');
  }, []);
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
      editList(listInfo, listInfo.listID, user.uid).then((response) => setListArray(response));
      console.warn(listInfo.listName, 'edit list');
      // } else if (listObj.listID === null) {
      //   createList(listObj, user.uid).then((listArray) => (setListArray(listArray)));
      //   setListObj({
      //     listID: listObj.firebaseKey || null,
      //     listName: listObj.listName,
      //     uid: user.uid || ''
      //   });
      console.warn(listInfo, 'you created list');
    }
  };

  const handleInputChange = (e) => {
    setListObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
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
          placeholder="placeholding list name"
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
