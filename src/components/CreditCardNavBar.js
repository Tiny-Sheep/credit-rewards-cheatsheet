import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router'


const CreditCardNavBar = (props) => {
  const { name } = props;

  return (
    <div>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <h1>Welcome {name}</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    {props.children}
    </div>
  )
}

export default CreditCardNavBar;
