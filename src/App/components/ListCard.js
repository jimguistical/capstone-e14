import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
} from 'reactstrap';
import { deleteListSites } from '../../helpers/data/siteData';
import ListForm from './ListForm';

function ListCard({
  user, setListSites, setListNameArray, ...listNameInfo
}) {
  const [editNow, setEditNow] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteListSites(user.uid)
          .then((response) => {
            (setListNameArray(response.getListNameArray));
            (setListSites(response.getSitesList));
          });
        break;
      case 'toggleEdit':
        setEditNow((prevState) => !prevState);
        break;
      default:
    }
  };

  return (
    <>
    <h1 className="display-4">{ listNameInfo.listName }</h1>
     <ButtonGroup>
      {
           editNow && <ListForm
           user={user}
           setListNameArray={setListNameArray}
           {...listNameInfo}
           />
         }
        <Button color='none'
          onClick={() => handleClick('toggleEdit')}>
            <i className="fas fa-edit fa-2x"></i>
        </Button>
      </ButtonGroup>
        <Button color='none'
            onClick={() => handleClick('delete')}><i className="far fa-trash-alt fa-2x"></i>
        </Button>
    </>
  );
}

ListCard.propTypes = {
  user: PropTypes.any,
  setListNameArray: PropTypes.func,
  setListSites: PropTypes.func,
  listNameInfo: PropTypes.object,
};

export default ListCard;
