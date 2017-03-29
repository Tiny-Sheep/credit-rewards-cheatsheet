import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router'


class CreditCardNavBar extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <h1>Welcome {this.props.name}</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      {this.props.children}
      </div>
    )
  }
}

export default CreditCardNavBar;
