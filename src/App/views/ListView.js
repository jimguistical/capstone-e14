import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
// import { Container, Button } from 'reactstrap';
// import { getList } from '../../helpers/data/listData';
import ListForm from '../components/ListForm';
import ListCard from '../components/ListCard';
import { getListNameObj } from '../../helpers/data/listData';

function ListView({ user }) {
  const [listObj, setListObj] = useState({});
  // const [siteArray, setSiteArray] = useState([]);

  useEffect(() => {
    getListNameObj(user.uid).then((response) => (setListObj(response)));
    setListObj(listObj);
    console.warn(listObj);
  }, []);

  // useEffect(() => {
  //   getList(user.uid).then((response) => (setListObj(response)));
  //   console.warn(listObj);
  // }, []);
  // need to use Promise.All to get sites with user & ListID

  return (
    <>
    <div>
      <ListForm
        user={user}
        listObj={listObj}
        setListObj={setListObj}
      />

      {/* need a className for this div ^^ for List + site card map */}
      <ListCard
        user={user}
        // listObj={listObj}
        // setListObj={setListObj}
      />
      {/* <div className='cardsHolder'>
        {siteArray.map((siteInfo) => (
          console.warn(setSiteArray(siteInfo))
          // pass listInfo.listID instead of just having it as key
          // SiteCard here
        ))}
      </div> */}
          {/* {<h3>
            { listObj.Name === null
              ? 'Please Create a List or Browse Service Sites'
              : ''
            }
          </h3>} */}
    </div>
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  setListObj: PropTypes.func,
  listObj: PropTypes.object,
  // siteArray: PropTypes.array,
  // setSiteArray: PropTypes.func
};

export default ListView;
