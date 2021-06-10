import React from 'react';
import { Navbar, NavbarText } from 'reactstrap';

function Footer() {
  return (
    <>
      <Navbar
        style={{ textCenter: true }}
        dark expand='sm'
        color='info'
        fixed='bottom'
      >
        <NavbarText>
          Copyright © Jim Conner 2021
        </NavbarText>
      </Navbar>
    </>
  );
}

export default Footer;
