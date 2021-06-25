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
    <h1 className="display-3">{ listNameInfo.listName }</h1>
          <h5 className="display-5">Browse services sites or sign in to create your own resource list.</h5>
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
            {editNow ? <i className="far fa-window-close fa-2x"></i> : <i className="fas fa-edit fa-2x"></i>}
        </Button>
        <Button color='danger'
            onClick={() => handleClick('delete')}>X
        </Button>
      </ButtonGroup>
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
