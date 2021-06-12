import React, {
// useState
} from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import {
  Button,
  // CardImg,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';
// import CardModal from './forms/CardModal';

function SiteCard({ ...siteObj }) {
  // const [editNow, setEditNow] = useState(false);
  // const history = useHistory();

  const handleClick = (type) => {
    if (type === 'view') {
      console.warn('you clicked view card button');
    }
  };

  return (
      <Card body
        className='customizedCard'
        // color='transparent'
      >
        {/* <CardImg top width='100%' height='200px'src={projectObj.image} alt='Player Card'
        /> */}
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
            {...projectObj}
          /> */}
     {/* {
      user
        ? <>
            <Button color='success' onClick={() => handleClick('edit')}
            >{editNow ? 'Close Form' : 'Edit Form'}</Button>
            <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
          </>
        : ''
    } */}
      </Card>
  );
}

SiteCard.propTypes = {
  // user: PropTypes.any,
  // sites: PropTypes.array,
  // setSites: PropTypes.func,
  siteObj: PropTypes.object
};

export default SiteCard;
