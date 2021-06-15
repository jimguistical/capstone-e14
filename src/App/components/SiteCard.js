import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';

function SiteCard({
  user,
  setSites,
  ...siteObj
}) {
  const handleClick = (type) => {
    if (type === 'add') {
      // addSite(siteObj).then((sitesArray) => setSites(sitesArray));
      // addSite(site, user.uid).then((sitesArray) => setSites(sitesArray));
      console.warn(siteObj.building, 'you clicked add site to list');
    } else if (type === 'edit') {
      console.warn('you clicked edit card button');
    } else if (type === 'view') {
      console.warn('you clicked view card button');
    }
  };

  return (
      <Card body
        className='customizedCard'
        key={siteObj.building}
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
