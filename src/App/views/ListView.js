import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
// import { Container, Button } from 'reactstrap';
import { getList } from '../../helpers/data/listData';
import ListCard from '../components/ListCard';
import ListForm from '../components/ListForm';

function ListView({ user }) {
  const [listArray, setListArray] = useState([]);

  useEffect(() => {
    getList(user.uid).then((response) => (setListArray(response)));
  }, []);

  return (
    <>
    {
        listArray.length === 0
          ? <ListForm
            user={user}
            listArray={listArray}
            setListArray={setListArray}
          />
          : ''
        }

    <div className='cardsHolder'>
      {listArray.map((listInfo) => (
        // this ListCard is going to be SiteCard here
        // pass listInfo.listID instead of just having it as key
        <ListCard
          user={user}
          key={listInfo.listID}
          listArray={listArray}
          setListArray={setListArray}
          {...listInfo}
        />
      ))}
        <h3>
          { listArray.length === 0
            ? 'Please Create a List or Browse Service Sites'
            : ''
          }
        </h3>
    </div>
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  listArray: PropTypes.array,
  setListArray: PropTypes.func
};

export default ListView;
