import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'reactstrap';
import SiteCard from '../components/SiteCard';
// import { createList, getList } from '../../helpers/data/listData';

function SitesView({ user, sites, setSites }) {
  // const [listArray, setListArray] = useState([]);
  // const [listObj, setListObj] = useState({});

  // const handleClick = () => {
  //   createList(listObj, user.uid).then((getList(user.uid).then(setListObj(listObj))));
  // };
  return (
    <>
    {/* <Button color='warning' onClick={() => handleClick()}>Create Your List</Button> */}

    <div className='cardsHolder' id='sites'>
    {sites.map((siteObj) => (
      <SiteCard
      user={user}
      key={siteObj.building}
      setSites={setSites}
      {...siteObj}
      />
    ))}
  </div>
  </>
  );
}

SitesView.propTypes = {
  user: PropTypes.any,
  sites: PropTypes.array,
  setSites: PropTypes.func,
  // list: PropTypes.object
};

export default SitesView;
