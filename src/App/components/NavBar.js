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
      <Link className='nav-link' to='/my-list'>My List</Link>
    </NavItem>
  );

  return (
    <>
      <div>
      <Navbar dark color="dark" expand="sm">
        <NavbarBrand className="nav-brand">
        <i className="fab fa-wpexplorer fa-3x"></i>
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
            <Link className="nav-link" to="/service-sites">Browse Service Sites</Link>
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
