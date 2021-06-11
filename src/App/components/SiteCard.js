import React, {
// useState
} from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import {
  // Button,
  // CardImg,
  Card,
  CardBody,
  // CardText,
  // CardTitle,
} from 'reactstrap';
// import CardModal from './forms/CardModal';

function SiteCard() {
  // const [editNow, setEditNow] = useState(false);
  // const history = useHistory();

  return (
      <Card body
        className='customizedCard'
        color='transparent'
      >
        {/* <CardImg top width='100%' height='200px'src={projectObj.image} alt='Player Card'
        /> */}
        <CardBody>
          {/* <CardTitle tag='h3'>{projectObj.title}</CardTitle>
          <CardText tag='h5'>{projectObj.description}</CardText> */}
          {/* <Button color='primary' onClick={() => handleClick('view')}>View Details</Button> */}
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
  // admin: PropTypes.any,
  // projects: PropTypes.array,
  // setProjects: PropTypes.func,
  // projectObj: PropTypes.object
};

export default SiteCard;
