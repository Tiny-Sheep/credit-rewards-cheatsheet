import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
// import { Link } from 'react-router';


class GettingStarted extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>The Ultimate Credit Card Cheatsheet</h1>
          <h3>Know which credit card to use for all your purchases!</h3>
          <Button bsStyle="primary">Get Started</Button>
        </Jumbotron>
      </div>
    )
  }
}


export default GettingStarted;
