import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
// import { getList } from '../../helpers/data/listData';
import ListForm from '../components/ListForm';
import ListCard from '../components/ListCard';
import { getList, getListByListName } from '../../helpers/data/listData';
import SiteCard from '../components/SiteCard';

function ListView({ user }) {
  const [listNameArray, setListNameArray] = useState([]);
  const [listSites, setListSites] = useState([]);

  useEffect(() => {
    getListByListName(user.uid).then((response) => (setListNameArray(response)));

    getList(user.uid).then((response) => (setListSites(response)));

    console.warn(listSites);
  }, []);

  return (
    <>
      <div>
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
              setListSites={setListSites}
              setListNameArray={setListNameArray}
              {...listNameInfo}
              />
            ))}
        </div>
        <div className='cardsHolder'>
          {listSites.map((siteObj) => (
            <SiteCard
            user={user}
            key={siteObj.listID}
            setListSites={setListSites}
            {...siteObj}
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
