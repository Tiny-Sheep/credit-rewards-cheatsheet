import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router'


class CreditCardNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              The Rewards Cheatsheet
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
