import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const GettingStarted = () => {
  const { jumbotronStyle, bodyStyle, linkContainerStyle } = styles;
  
  return (
    <div style={bodyStyle}>
      <Jumbotron style={jumbotronStyle}>
        <h1>The Credit Rewards Cheatsheet</h1>
        <h3>Know which credit card to use for all your purchases!</h3>
        <br />
        <LinkContainer style={linkContainerStyle}to="/dashboard">
          <Button bsStyle="info">Get Started</Button>
        </LinkContainer>
      </Jumbotron>
    </div>
  );
};



const imgBackground = 'http://i.imgur.com/cqxzeR2.jpg';
const styles = {
  jumbotronStyle: {
    position: 'absolute',
    top: '10%',
    margin: 'auto',
    width: '100%',
    height: '400px',
    backgroundColor: 'rgba(200,240,255,.7)',
    textAlign: 'center',
    color: 'white',
    textShadow: '1px 1px 1px black'
  },
  bodyStyle: {
    backgroundImage: `url(${imgBackground})`,
    backgroundSize: 'cover',
    height: '800px'
  },
  linkContainerStyle: {
    borderRadius: 2,
    position: 'relative',
    bottom: '20%'
  }
};

export default GettingStarted;
