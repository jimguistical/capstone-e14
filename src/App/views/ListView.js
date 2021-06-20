import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
// import { Container, Button } from 'reactstrap';
// import { getList } from '../../helpers/data/listData';
import ListForm from '../components/ListForm';
import ListCard from '../components/ListCard';
import { getListByListName } from '../../helpers/data/listData';
import SiteCard from '../components/SiteCard';

function ListView({ user }) {
  const [listNameArray, setListNameArray] = useState([]);
  const [siteArray, setSiteArray] = useState([]);

  useEffect(() => {
    getListByListName(user.uid).then((response) => (setListNameArray(response)));
  // need to use Promise.All to get sites with user & ListID
  }, []);

  return (
    <>
    <div>
      <ListForm
        user={user}
        setListNameArray={setListNameArray}
      />

<div className='cardsHolder'>
        {listNameArray.map((listNameInfo) => (
          <ListCard
          user={user}
          key={listNameInfo.listID}
          setListNameArray={setListNameArray}
          {...listNameInfo}
          />
        ))}
      </div>
      <div className='cardsHolder'>
        {siteArray.map((siteInfo) => (
          <SiteCard
          user={user}
          key={siteInfo.building}
          />
          // pass listInfo.listID instead of just having it as key
        ))}
      </div>
    </div>
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  listNameArray: PropTypes.array,
  setListNameArray: PropTypes.func
  // setListObj: PropTypes.func,
  // listObj: PropTypes.object,
  // siteArray: PropTypes.array,
  // setSiteArray: PropTypes.func
};

export default ListView;
