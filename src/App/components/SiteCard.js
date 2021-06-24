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
import { addSite, deleteSite } from '../../helpers/data/siteData';

function SiteCard({
  user,
  setListSites,
  ...siteObj
}) {
  const [siteCardObj, setSiteCardObj] = useState({
    listID: siteObj?.listID || null,
    building: siteObj?.building,
    address: siteObj?.address,
    city: siteObj?.city,
    zip_code: siteObj?.zip_code,
    uid: user.uid || user
  });

  const handleClick = (type) => {
    if (type === 'add') {
      addSite(siteCardObj, user.uid);
      console.warn(setSiteCardObj);
      // .then((response) => (setSiteCardObj(response)));
    } else if (type === 'delete') {
      deleteSite(siteCardObj.listID, user.uid)
        .then((response) => (setListSites(response)));
    } else if (type === 'view') {
      // add view here
      console.warn('you clicked view card button');
    }
  };

  return (
      <Card body
        className='customizedCard'
        key={siteCardObj.building}
      >
        <CardBody>
          <CardTitle tag='h4'>{siteCardObj.building}</CardTitle>
          <CardText tag='h5'>{siteCardObj.address}</CardText>
          <CardText tag='h5'>{siteCardObj.city}, TN {siteCardObj.zip_code}</CardText>
          <ButtonGroup>
            {/* <Button color='primary'
              onClick={() => handleClick('view')}>Details
            </Button> */}
            {
              user
                ? <>
                    <Button color='success'
                      onClick={() => handleClick('add')}>
                        Add to List
                    </Button>
                    <Button color='danger'
                      onClick={() => handleClick('delete')}>
                        X
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
  setSiteCardObj: PropTypes.func,
  setListSites: PropTypes.func
};

export default SiteCard;
