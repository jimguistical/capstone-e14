import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';
import { addSite } from '../../helpers/data/siteData';

function ListCard({ user, setSites, ...listObj }) {
  const [site, setSite] = useState({
    firebaseKey: listObj?.firebaseKey || null,
    buildingName: listObj?.building || '',
    address: listObj?.address || '',
    uid: user.uid || user
  });
  // const [editNow, setEditNow] = useState(false);
  // const history = useHistory();
  const handleClick = (type) => {
    if (type === 'add') {
      addSite(site, user.uid).then((sitesArray) => setSites(sitesArray));
      console.warn(site, setSite);
    } else if (type === 'edit') {
      console.warn('you clicked edit card button');
    } else if (type === 'view') {
      console.warn('you clicked view card button');
    }
  };
  return (
    <Card body
        className='customizedCard'
        // color='transparent'
      >
      <CardBody>
        <CardTitle tag='h4'>{listObj.building}</CardTitle>
        <CardText tag='h5'>{listObj.address}</CardText>
        <CardText tag='h5'>{listObj.city}, TN {listObj.zip_code}</CardText>
        <CardText tag='h5'></CardText>
        <Button color='primary'
          onClick={() => handleClick('view')}>View Details
        </Button>
      </CardBody>
    </Card>
  );
}

ListCard.propTypes = {
  user: PropTypes.any,
  listObj: PropTypes.object,
  setSites: PropTypes.func,
};

export default ListCard;
