import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  Container,
} from 'reactstrap';
import { deleteList } from '../../helpers/data/listData';
import ListForm from './ListForm';

function ListCard({ user, setListArray, ...listInfo }) {
  const [editNow, setEditNow] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteList(listInfo.listID, user.uid).then((response) => (setListArray(response)));
        break;
      case 'toggleEdit':
        setEditNow((prevState) => !prevState);
        break;
      case 'view':
        console.warn(listInfo, 'clicked View Button');
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <>
       {<h3>{ listInfo.listName }</h3> }
     <ButtonGroup>
        <Button color='secondary'
          onClick={() => handleClick('toggleEdit')}>
            {editNow ? 'Close' : 'Edit'}
        </Button>

        {
            editNow && <ListForm
            user={user}
            setListArray={setListArray}
            {...listInfo}
            />
          }

        <Button color='danger'
            onClick={() => handleClick('delete')}>X
        </Button>
      </ButtonGroup>
          <Container
            className="listContainer"
            fluid={true}
            key={listInfo.listID}
          ></Container>
    </>
  );
}

ListCard.propTypes = {
  user: PropTypes.any,
  setListArray: PropTypes.func,
  listInfo: PropTypes.object,
};

export default ListCard;
