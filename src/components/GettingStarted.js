import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
// import { Link } from 'react-router';

const GettingStarted = () => {
  const { jumbotronStyle } = styles;
  
  return (
    <Jumbotron style={jumbotronStyle}>
      <h1>The Credit Rewards Cheatsheet</h1>
      <h3>Know which credit card to use for all your purchases categories!</h3>
      <Button bsStyle="primary">Get Started</Button>
    </Jumbotron>
  );
};

const styles = {
  jumbotronStyle: {
    backgroundColor: 'rgb(200,240,255)'
  }
};

export default GettingStarted;
