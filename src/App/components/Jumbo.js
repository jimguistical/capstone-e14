import React from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';

function Jumbo() {
  return (
    <div>
       <Jumbotron fluid >
        <Container fluid transparent>
          <h1 className="display-3">Find Help in Nashville</h1>
          <p className="lead">Browse services sites or sign in to create your own resource list.</p>
          <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
