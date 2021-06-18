import React from 'react';
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
  const handleClick = (type) => {
    if (type === 'add') {
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
