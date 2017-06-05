/* eslint-disable */
import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const CreditCardNavBar = (props) => {
  const { name } = props;
  const { navBarStyle } = styles;

  return (
    <div>
      <Navbar collapseOnSelect style={navBarStyle}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/dashboard">
              Credit Rewards Cheatsheet
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem >
              <Link to="/cards">
                Credit Cards
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const styles = {
  navBarStyle: {
    backgroundColor: 'rgb(200,240,255)',
    boxShadow: '1px 1px 1px grey',
  }
};


export default CreditCardNavBar;
