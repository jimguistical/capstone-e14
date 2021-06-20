import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
// import { getList } from '../../helpers/data/listData';
import ListForm from '../components/ListForm';
import ListCard from '../components/ListCard';
import { getListByListName } from '../../helpers/data/listData';
import SiteCard from '../components/SiteCard';

function ListView({ user }) {
  const [listNameArray, setListNameArray] = useState([]);
  const [userSites, setUserSites] = useState([]);

  useEffect(() => {
    getListByListName(user.uid).then((response) => (setListNameArray(response)));

    console.warn(setUserSites);
  // need to use Promise.All to get sites with user & ListID
  }, []);

  return (
    <>
      <div>
        {/* ListFOrm isn't currently wrapped in it's own div */}
        {
          listNameArray.length === 0
            ? <ListForm
              user={user}
              setListNameArray={setListNameArray}
            />
            : ''
        }

        <div>
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
          {userSites.map((siteObj) => (
            <SiteCard
            user={user}
            key={siteObj.building}
            setUserSites={setUserSites}
            {...siteObj}
            // pass listInfo.listID instead of just having it as key
            />
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
};

export default ListView;
