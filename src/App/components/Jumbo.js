import React from 'react';
import PropTypes from 'prop-types';
import { Container, Jumbotron } from 'reactstrap';

function Jumbo({ user }) {
  return (
    <div>
       <Jumbotron fluid
        style={{
          background: 'none',
          textAlign: 'right'
        }}>
        <Container fluid style={{
          alignContent: 'right'
        }}>
          <h1 className="display-4">Find Help in Nashville</h1>
          {user
            ? <h5 className="display-5">You&apos;re logged in - Create a list to add service sites.</h5>
            : <h5 className="display-5">Browse service sites or sign in to create your own resource list.</h5>}
        </Container>
      </Jumbotron>
    </div>
  );
}

Jumbo.propTypes = {
  user: PropTypes.any
};

export default Jumbo;
