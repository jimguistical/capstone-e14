import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  // Container,
} from 'reactstrap';
import {
  deleteList,
  // getList
  // getListNameObj
} from '../../helpers/data/listData';
import ListForm from './ListForm';

function ListCard({ user, setListNameArray, ...listNameInfo }) {
  const [editNow, setEditNow] = useState(false);
  // const [listNameInfo, setListNameArray] = useState({});

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteList(listNameInfo.listID, user.uid).then((response) => (setListNameArray(response)));
        // deleteList(listNameInfo.listID, user.uid).then((response) => (console.warn(response)));
        // console.warn(deleteList(listNameInfo.listID));
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
       {<h3>{ listNameInfo.listName }</h3> }
     <ButtonGroup>
        <Button color='secondary'
          onClick={() => handleClick('toggleEdit')}>
            {editNow ? 'Close' : 'Edit'}
        </Button>

        {
            editNow && <ListForm
            user={user}
            setListNameArray={setListNameArray}
            {...listNameInfo}
            />
          }

        <Button color='danger'
            onClick={() => handleClick('delete')}>X
        </Button>
      </ButtonGroup>
          {/* <Container
            className="listContainer"
            fluid={true}
            key={listNameInfo.listID}
          >
          </Container> */}
    </>
  );
}

ListCard.propTypes = {
  user: PropTypes.any,
  setListNameArray: PropTypes.func,
  listNameInfo: PropTypes.object,
};

export default ListCard;
