import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
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
  const [siteCardObj, setSiteCardObj] = useState({
    buildingName: siteObj?.building,
    address: siteObj?.address,
    city: siteObj?.city,
    zipCode: siteObj,
    uid: user.uid || user
  });

  const handleClick = (type) => {
    if (type === 'add') {
      // this is where I call addSite to post new Object to FB
      console.warn(siteObj, 'you clicked add site to list');
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
      >
        <CardBody>
          <CardTitle tag='h4'>{siteCardObj.building}</CardTitle>
          <CardText tag='h5'>{siteCardObj.address}</CardText>
          <CardText tag='h5'>{siteCardObj.city}, TN {siteCardObj.zip_code}</CardText>
          <ButtonGroup>
            <Button color='primary'
              onClick={() => handleClick('view')}>View Details
            </Button>
            {
              user
                ? <>
                    <Button color='success'
                      onClick={() => handleClick('add')}>Add to List
                    </Button>
                  </>
                : ''
            }
          </ButtonGroup>
        </CardBody>
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
