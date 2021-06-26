import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { CardDeck } from 'reactstrap';
import {
  getAllListData
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
    });
  }, []);

  return (
    <>
      <div className='listCardsHolder'>
        {
          listNameArray?.length === 1
            ? ''
            : <ListForm
            user={user}
            setListNameArray={setListNameArray}
          />
        }
      </div>

      <CardDeck>
          {listNameArray?.map((listNameInfo) => (
            <ListCard
            user={user}
            key={listNameInfo.listID}
            setListSites={setListSites}
            setListNameArray={setListNameArray}
            {...listNameInfo}
            />
          ))}
      </CardDeck>
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
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  listNameArray: PropTypes.array,
  setListSites: PropTypes.func,
  setListNameArray: PropTypes.func
};

export default ListView;
