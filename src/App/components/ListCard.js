import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  // Container,
} from 'reactstrap';
import {
  deleteList,
  getListNameObj
} from '../../helpers/data/listData';
import ListForm from './ListForm';

function ListCard({ user }) {
  const [editNow, setEditNow] = useState(false);
  const [listObj, setListObj] = useState({});

  useEffect(() => {
    getListNameObj(user.uid).then((response) => (setListObj(response)));
    console.warn(listObj);
  });

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        // deleteList(listObj.listID, user.uid).then((response) => (setListObj(response)));
        console.warn(deleteList(listObj.listID));
        break;
      case 'toggleEdit':
        setEditNow((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <>
       {<h3>{ listObj.listName }</h3> }
     <ButtonGroup>
        <Button color='secondary'
          onClick={() => handleClick('toggleEdit')}>
            {editNow ? 'Close' : 'Edit'}
        </Button>

        {
            editNow && <ListForm
            user={user}
            setListObj={setListObj}
            {...listObj}
            />
          }

        <Button color='danger'
            onClick={() => handleClick('delete')}>X
        </Button>
      </ButtonGroup>
          {/* <Container
            className="listContainer"
            fluid={true}
            key={listObj.listID}
          >
          </Container> */}
    </>
  );
}

ListCard.propTypes = {
  user: PropTypes.any,
  setListObj: PropTypes.func,
  listObj: PropTypes.object,
};

export default ListCard;
