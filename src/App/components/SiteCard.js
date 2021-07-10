import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  // CardSubtitle,
  CardText,
  // CardTitle,
} from 'reactstrap';
import { addSite, deleteSite } from '../../helpers/data/siteData';

function SiteCard({
  user,
  setListSites,
  listNameArray,
  ...siteObj
}) {
  const [siteCardObj, setSiteCardObj] = useState({
    listID: siteObj?.listID || null,
    building: siteObj?.building,
    address: siteObj?.address,
    city: siteObj?.city,
    zip_code: siteObj?.zip_code,
    phone_number: siteObj?.phone_number,
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
      <Card
        style={{ backgroundColor: 'rgba(242, 241, 239, .9)' }}
        className='customizedCard'
        key={siteCardObj.building}
      >
        <CardHeader tag='h4'>{siteCardObj.building}
        </CardHeader>
        <CardBody>
          <CardText tag='h5'>{siteCardObj.address}</CardText>
          <CardText tag='h5'>{siteCardObj.city}, TN {siteCardObj.zip_code}</CardText>
          <CardText tag='h5'></CardText>
          <CardText tag='h5'>{siteCardObj.phone_number}</CardText>
        </CardBody>
            <>
              {
                user
                && <CardFooter>
                  {
                    listNameArray?.length === 1
                      ? <Button color='danger' outline
                      onClick={() => handleClick('delete')}>
                        <i className="fas fa-minus fa-2x"></i>
                    </Button>
                      : <Button color='success' outline
                    onClick={() => handleClick('add')}>
                      <i className="fas fa-plus fa-2x"></i>
                  </Button>
                  }
                </CardFooter>
              }
            </>
      </Card>
  );
}

SiteCard.propTypes = {
  user: PropTypes.any,
  siteObj: PropTypes.object,
  setSiteCardObj: PropTypes.func,
  listNameArray: PropTypes.array,
  setListSites: PropTypes.func
};

export default SiteCard;
