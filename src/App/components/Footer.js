import React from 'react';
import { Navbar, NavbarText } from 'reactstrap';

function Footer() {
  return (
    <>
      <Navbar
        dark
        color='dark'
        expand='sm'
        fixed='bottom'
      >
        <NavbarText className="mr-auto">
          Copyright © Jim Conner 2021
        </NavbarText>
        <NavbarText className="ml-auto">
        Photo by <a href="https://unsplash.com/@austinwills?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Austin Wills</a> on <a href="https://unsplash.com/@austinwills?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </NavbarText>
      </Navbar>
    </>
  );
}

export default Footer;
