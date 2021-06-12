import React from 'react';
import PropTypes from 'prop-types';

function ListView() {
  return (
    <div>
      <h3>This is the UserList View</h3>
    </div>
  );
}

ListView.propTypes = {
  user: PropTypes.any

};

export default ListView;
