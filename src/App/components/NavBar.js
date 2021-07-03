import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

function NavBar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authButtons = () => (
    <>
        {
          user !== null
          && <Nav>
              <NavItem className="ml-auto">
            {
              user
                ? <Button outline color='danger' size="lg" onClick={signOutUser}>SIGN OUT</Button>
                : <Button outline color='info' size="lg" onClick={signInUser}>SIGN IN</Button>
            }
              </NavItem>
            </Nav>
        }
    </>
  );

  const authMyList = () => (
    <NavItem>
      <Link className='nav-link' to='/my-list'><i className="fas fa-list"></i> My List</Link>
    </NavItem>
  );

  return (
    <>
      <div>
      <Navbar dark color="dark" expand="sm" fixed="top">
        <NavbarBrand className="nav-brand">
        <i className="fas fa-hands-helping fa-2x"></i>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav pills className="mr-auto" navbar>
            <NavItem>
            <Link className="nav-link" to="/">
              SOCIAL SERVICES EXPLORER
            </Link>
          </NavItem>
            <NavItem>
            <Link className="nav-link" to="/service-sites">
            <i className="far fa-address-book"></i> Browse Service Sites
            </Link>
          </NavItem>
          {user && authMyList() }
          </Nav>
            { authButtons() }
        </Collapse>
      </Navbar>
    </div>
    </>
  );
}

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
