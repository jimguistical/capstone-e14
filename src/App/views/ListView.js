import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import {
  getAllListData,
  // getList,
  // getListByListName
} from '../../helpers/data/listData';
import ListForm from '../components/ListForm';
import ListCard from '../components/ListCard';
import SiteCard from '../components/SiteCard';

function ListView({ user }) {
  const [listNameArray, setListNameArray] = useState([]);
  const [listSites, setListSites] = useState([]);

  useEffect(() => {
    getAllListData(user.uid).then((response) => {
      (setListNameArray(response.getListNameArray));
      (setListSites(response.getSitesList));

      console.warn('test listNameArray', response.getListNameArray);
      console.warn('test getSitesList', response.getSitesList);
    });
  }, []);

  return (
    <>
      <div>
        <ListForm
          user={user}
          setListNameArray={setListNameArray}
        />
        {/* {
          listNameArray
            ? <ListForm
              user={user}
              setListNameArray={setListNameArray}
            />
            : ''
        } */}

        <div>
            {listNameArray?.map((listNameInfo) => (
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
          {listSites?.map((siteObj) => (
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
  // am i using listNameArray anywhere?
  setListSites: PropTypes.func,
  setListNameArray: PropTypes.func
};

export default ListView;
