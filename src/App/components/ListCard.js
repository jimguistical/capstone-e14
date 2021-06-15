import React, {
// useState
} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';
import { deleteList } from '../../helpers/data/listData';
// import { addSite } from '../../helpers/data/siteData';

function ListCard({
  user, setSites, setListArray, listObj, ...siteObj
}) {
  // const [site, setSite] = useState({
  //   firebaseKey: listObj?.firebaseKey || null,
  //   buildingName: listObj?.building || '',
  //   address: listObj?.address || '',
  //   uid: user.uid || user
  // });
  // const [editNow, setEditNow] = useState(false);
  // const history = useHistory();
  const handleClick = (type) => {
    if (type === 'add') {
      // addSite(site, user.uid).then((sitesArray) => setSites(sitesArray));
      // console.warn(site, setSite);
    } else if (type === 'edit') {
      console.warn('you clicked EDIT card button');
    } else if (type === 'view') {
      console.warn('you clicked VIEW card button');
    } else if (type === 'delete') {
      deleteList(listObj.listID).then((listArray) => (setListArray(listArray)));
      console.warn('you clicked DELETE card button');
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
        <CardText tag='h5'>{siteObj.city}{siteObj.zip_code}</CardText>
        {/* <CardText tag='h5'></CardText> */}
        <Button color='primary'
          onClick={() => handleClick('view')}>View Details
        </Button>
        <Button color='danger'
          onClick={() => handleClick('delete')}>X
        </Button>
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
  setListArray: PropTypes.func
};

export default ListCard;
