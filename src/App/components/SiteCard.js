import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';
import { addSite } from '../../helpers/data/siteData';
// import CardModal from './forms/CardModal';

function SiteCard({
  user,
  setSites,
  ...siteObj
}) {
  const [site, setSite] = useState({
    firebaseKey: siteObj?.firebaseKey || null,
    building: siteObj?.building || '',
    address: siteObj?.address || '',
    uid: user.uid || user
  });
  // const [editNow, setEditNow] = useState(false);
  // const history = useHistory();

  const handleClick = (type) => {
    if (type === 'add') {
      addSite(site, user.uid).then((sitesArray) => setSites(sitesArray));
      // addSite(site, user.uid).then((sitesArray) => setSites(sitesArray));
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
        key={siteObj.firebaseKey}
        // color='transparent'
      >
        <CardBody>
          <CardTitle tag='h4'>{siteObj.building}</CardTitle>
          <CardText tag='h5'>{siteObj.address}</CardText>
          <CardText tag='h5'>{siteObj.city}, TN {siteObj.zip_code}</CardText>
          <CardText tag='h5'></CardText>
          <Button color='primary'
            onClick={() => handleClick('view')}>View Details
          </Button>
        </CardBody>
          {/* <CardModal
            {...siteObj}
          /> */}
     {
      user
        ? <>
            {/* <Button color='success' onClick={() => handleClick('edit')}
            >Edit
              {editNow ? 'Close Form' : 'Edit Form'}
              </Button> */}
            <Button color='success'
              onClick={() => handleClick('add')}>Add to List
            </Button>
            {/* <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button> */}
          </>
        : ''
    }
      </Card>
  );
}

SiteCard.propTypes = {
  user: PropTypes.any,
  siteObj: PropTypes.object,
  setSites: PropTypes.func,
  // site: PropTypes.object,
  // setSite: PropTypes.func,
  // sites: PropTypes.array,
};

export default SiteCard;
