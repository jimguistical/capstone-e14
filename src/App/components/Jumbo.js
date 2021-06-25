import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import homeBackground from '../../assets/austin-wills--qKP-eGqTw0-unsplash.jpg';

function Jumbo() {
  return (
    <div>
       <Jumbotron
       style={{ backgroundImage: `url(${homeBackground})`, backgroundSize: 'cover' }}>
        <Container fluid>
          <h3 className="display-5">Find Help in Nashville</h3>
          <p className="lead">Browse services sites or sign in to create your own resource list.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
