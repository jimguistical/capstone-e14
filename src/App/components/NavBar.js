import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <div>
      <Navbar dark color="dark" expand="md">
        <NavbarBrand href="/">Social Services Explorer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link className="nav-link" to="/add-player">Browse Service Sites</Link>

            </NavItem>
            <NavItem>
            <Link className="nav-link" to="/add-player">My List</Link>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    </div>
  );
}

NavBar.propTypes = {

};

export default NavBar;
