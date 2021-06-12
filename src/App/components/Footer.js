import React from 'react';
import { Navbar, NavbarText } from 'reactstrap';

function Footer() {
  return (
    <>
      <Navbar
        dark
        color='dark'
        expand='sm'
        // fixed='bottom'
      >
        <NavbarText>
          Copyright © Jim Conner 2021
        </NavbarText>
      </Navbar>
    </>
  );
}

export default Footer;
