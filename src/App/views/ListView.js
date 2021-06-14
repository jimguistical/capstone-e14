import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Container, Form, FormGroup, Label, Input
} from 'reactstrap';
import { createList, getList } from '../../helpers/data/listData';
import ListCard from '../components/ListCard';

function ListView({ user }) {
  // const [listButton, setListButton] = useState(true);
  const [listArray, setListArray] = useState([]);
  const [listObj, setListObj] = useState({
    // listID: listObj.firebaseKey || null,
    // listName: listObj.listName,
    uid: user.uid || user
  });

  const handleInputChange = (e) => {
    setListObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    getList(user.uid).then((listArrayResponse) => (setListObj(listArrayResponse)));
    // console.warn('useEffect listview', setListObj);
  }, []);

  const handleClick = () => {
    createList(listObj, user.uid).then((getList(user.uid).then(setListArray(listArray))));
  };

  return (
    <>
    <Container>
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

    <div className='cardsHolder'>
      {listArray.map((cardListObj) => (
        <ListCard
        user={user}
        key={cardListObj.business}
        setListArray={setListArray}
        {...cardListObj}
        />
      ))}
    </div>
        </Container>
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  listArray: PropTypes.array,
  setListArray: PropTypes.func
};

export default ListView;
