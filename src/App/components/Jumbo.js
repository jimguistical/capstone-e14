import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

function Jumbo() {
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
          <h5 className="display-5">Browse services sites or sign in to create your own resource list.</h5>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
