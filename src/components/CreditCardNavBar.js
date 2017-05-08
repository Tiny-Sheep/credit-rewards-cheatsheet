import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router'


const CreditCardNavBar = (props) => {
  const { name } = props;
  const { navBarStyle } = styles;

  return (
    <div>
      <Navbar collapseOnSelect style={navBarStyle}>
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

const styles = {
  navBarStyle: {
    backgroundColor: 'rgb(200,240,255)'
  }
};


export default CreditCardNavBar;
