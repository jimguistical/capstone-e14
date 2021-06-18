import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  Container,
} from 'reactstrap';
import { deleteList } from '../../helpers/data/listData';
import ListForm from './ListForm';
// import { addSite } from '../../helpers/data/siteData';

function ListCard({
  user, setListArray, ...listInfo
}) {
  const [editNow, setEditNow] = useState(false);

  // useEffect(() => {
  //   getList(user.uid).then((response) => (setListArray(response)));
  // }, []);
  // const [site, setSite] = useState({
  //   firebaseKey: listObj?.firebaseKey || null,
  //   buildingName: listObj?.building || '',
  //   address: listObj?.address || '',
  //   uid: user.uid || user
  // });
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

  // const handleClick = (type) => {
  //   if (type === 'add') {
  //     addSite(site, user.uid).then((sitesArray) => setSites(sitesArray));
  //     console.warn('you clicked add');
  //   } else if (type === 'edit') {
  //     console.warn('you clicked EDIT card button');
  //   } else if (type === 'view') {
  //     console.warn('you clicked VIEW card button');
  //   } else if (type === 'delete') {
  //     deleteList(listObj.listID, user.uid).then((listArray) => (setListArray(listArray)));
  //   }
  // };
  return (
    <>
       {<h3>{ listInfo.listName }</h3> }
     <ButtonGroup>
        <Button color='secondary'
          onClick={() => handleClick('toggleEdit')}>
            {editNow ? 'Close' : 'Edit'}
        </Button>
        {/* <Button color='primary'
            onClick={() => handleClick('view')}>Details
        </Button> */}
        <Button color='danger'
            onClick={() => handleClick('delete')}>X
        </Button>
      </ButtonGroup>
      {
          editNow && <ListForm
          user={user}
          setListArray={setListArray}
          {...listInfo}
          />
        }
          <Container
            className="listContainer"
            fluid={true}
            key={listInfo.listID}

          >
          </Container>
    </>
  );
}

ListCard.propTypes = {
  user: PropTypes.any,
  setListArray: PropTypes.func,
  listObj: PropTypes.object,
  listInfo: PropTypes.object,
  // setSites: PropTypes.func,
  // site: PropTypes.object,
  // setSite: PropTypes.func,
  // listArray: PropTypes.array,
  // setListObj: PropTypes.func
};

export default ListCard;
