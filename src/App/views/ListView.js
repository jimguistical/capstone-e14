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

function ListView({ user }) {
  // const [listObj, setListObj] = useState({});
  const [listNameArray, setListNameArray] = useState([]);
  // const [siteArray, setSiteArray] = useState([]);

  useEffect(() => {
    getListByListName(user.uid).then((response) => (setListNameArray(response)));
    // debugger;
    // setListObj(listObj);
    // console.warn(listObj);
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
        setListNameArray={setListNameArray}
      />

<div className='cardsHolder'>
        {listNameArray.map((listNameInfo) => (
          <ListCard
          // listName as key only works if I have on List Obj
          user={user}
          key={listNameInfo.listID}
          setListNameArray={setListNameArray}
          {...listNameInfo}
          />
        ))}
      </div>
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
  listNameArray: PropTypes.array,
  setListNameArray: PropTypes.func
  // setListObj: PropTypes.func,
  // listObj: PropTypes.object,
  // siteArray: PropTypes.array,
  // setSiteArray: PropTypes.func
};

export default ListView;
