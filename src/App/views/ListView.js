import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
// import { Container, Button } from 'reactstrap';
import { getList } from '../../helpers/data/listData';
// import ListCard from '../components/ListCard';
import ListForm from '../components/ListForm';

function ListView({ user }) {
  const [listObj, setListObj] = useState({});
  const [siteArray, setSiteArray] = useState([]);

  useEffect(() => {
    getList(user.uid).then((response) => (setSiteArray(response)));
    // need to use Promise.All to get sites with user & ListID
  }, []);

  return (
    <>
    <div>
      <ListForm
        user={user}
        listObj={listObj}
        setListObj={setListObj}
      />
    </div>

{/* where should I put list card? */}

    <div className='cardsHolder'>
      {/* {siteArray.map((siteInfo) => (
        console.warn(setSiteArray(siteInfo))
        // pass listInfo.listID instead of just having it as key
        // SiteCard here
      ))} */}
        {<h3>
          { siteArray.length === 0
            ? 'Please Create a List or Browse Service Sites'
            : ''
          }
        </h3>}
    </div>
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  siteArray: PropTypes.array,
  setSiteArray: PropTypes.func
};

export default ListView;
