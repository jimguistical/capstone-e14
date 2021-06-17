import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  // CardText,
  CardTitle,
} from 'reactstrap';
import { deleteList } from '../../helpers/data/listData';
import ListForm from './ListForm';
// import ListForm from './ListForm';
// import ListForm from './ListForm';
// import { addSite } from '../../helpers/data/siteData';

function ListCard({
  user, setListArray, ...listObj
}) {
  // const [editNow, setEditNow] = useState(false);

  // useEffect(() => {
  //   getList(user.uid).then(() => (setListArray(listArray)));
  // }, []);
  // const [site, setSite] = useState({
  //   firebaseKey: listObj?.firebaseKey || null,
  //   buildingName: listObj?.building || '',
  //   address: listObj?.address || '',
  //   uid: user.uid || user
  // });
  const [editNow, setEditNow] = useState(false);
  // const history = useHistory();
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteList(listObj.listID, user.uid).then((listArray) => (setListArray(listArray)));
        break;
      case 'edit':
        setEditNow((prevState) => !prevState);
        break;
      case 'view':
        console.warn('clicked View Button');
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
    <Card body
        className='customizedCard'
        key={listObj.listID}
      >
      <CardBody>
        <CardTitle tag='h4'>{listObj.listName}</CardTitle>
        {/* <ListForm/> */}
        {/* <CardText tag='h5'>{siteObj.address}</CardText>
        <CardText tag='h5'>{siteObj.city}{siteObj.zip_code}</CardText> */}
        <Button color='primary'
          onClick={() => handleClick('view')}>View Details
        </Button>
        <Button color='danger'
          onClick={() => handleClick('delete')}>X
        </Button>
        {
          editNow && <ListForm
            {...listObj}
          />
        }
      </CardBody>
    </Card>
  );
}

ListCard.propTypes = {
  user: PropTypes.any,
  listObj: PropTypes.object,
  setSites: PropTypes.func,
  site: PropTypes.object,
  setSite: PropTypes.func,
  listArray: PropTypes.array,
  setListArray: PropTypes.func
};

export default ListCard;
