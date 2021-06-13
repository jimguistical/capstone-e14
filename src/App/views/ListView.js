import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'reactstrap';
import ListCard from '../components/ListCard';
import { createList, getList } from '../../helpers/data/listData';

function ListView({ user }) {
  // const [listButton, setListButton] = useState(true);
  const [listArray, setListArray] = useState([

  ]);

  useEffect(() => {
    getList(user.uid).then((listArrayResponse) => (setListArray(listArrayResponse)));
  }, []);

  const handleClick = () => {
    createList(listArray, user.uid).then((getList(user.uid)));
  };

  return (
    <>
    <Container>
      <Button color='warning'
              onClick={() => handleClick()}>Create Your List
      </Button>
    <div className='cardsHolder'>
      {listArray.map((listObj) => (
        <ListCard
        user={user}
        key={listObj.business}
        setListArray={setListArray}
        {...listObj}
        />
      ))}
    </div>
        </Container>
    </>
  );
}

ListView.propTypes = {
  user: PropTypes.any,
  listArray: PropTypes.array,
  setListArray: PropTypes.func
};

export default ListView;
