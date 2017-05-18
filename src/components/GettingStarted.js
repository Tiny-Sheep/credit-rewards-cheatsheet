import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const GettingStarted = () => {
  const { jumbotronStyle, bodyStyle, linkContainerStyle } = styles;
  
  return (
    <div style={bodyStyle}>
      <Jumbotron style={jumbotronStyle}>
        <h1>The Credit Rewards Cheatsheet</h1>
        <h3>Know which credit card to use for all your purchases categories!</h3>
        <br />
        <LinkContainer style={linkContainerStyle}to="/dashboard">
          <Button bsStyle="info">Get Started</Button>
        </LinkContainer>
      </Jumbotron>
    </div>
  );
};



const imgBackground = 'http://i.imgur.com/4e7vjQU.jpg';
const styles = {
  jumbotronStyle: {
    position: 'absolute',
    top: '10%',
    margin: 'auto',
    width: '100%',
    height: '66%',
    backgroundColor: 'rgba(200,240,255,.7)',
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 2px grey'
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
