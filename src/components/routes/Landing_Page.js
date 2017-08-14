import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import * as actions from '../../actions';

class LandingPage extends Component {
  render() {
    const { jumbotronStyle, bodyStyle, linkContainerStyle } = styles;
    return (
      <div style={bodyStyle}>
        <Jumbotron style={jumbotronStyle}>
          <h1>THE CREDIT REWARDS CHEATSHEET</h1>
          <h3>KNOW WHICH CREDIT CARD TO USE FOR ALL YOUR PURCHASES!</h3>
          <br />
          <LinkContainer style={linkContainerStyle} to="/dashboard">
            <Button bsStyle="info"><h6>GET STARTED</h6></Button>
          </LinkContainer>
        </Jumbotron>
      </div>
    );
  }
}



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
    textShadow: '1px 1px black'
  },
  bodyStyle: {
    backgroundImage: `url(${imgBackground})`,
    backgroundSize: '100% 100%',
    height: '800px'
  },
  linkContainerStyle: {
    borderRadius: 3,
    position: 'relative',
    bottom: '20%',
    textShadow: '0px 0px white',
    width: '150px'
  }
};


export default LandingPage;
