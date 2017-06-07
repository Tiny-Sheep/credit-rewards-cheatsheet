import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Footer = () => {
  const { jumbotronStyle, linkColorStyle } = styles; 

  return (
    <footer style={ jumbotronStyle }>
      <h5>Created by Kristopher Parchen</h5>
      <h5><a style={linkColorStyle} href="http://krystneto.github.io/portfolio/">About</a></h5>
      <h5>Email: <a style={ linkColorStyle } href="mailto:kkparchen@gmail.com">kkparchen@gmail.com</a></h5>
      <h5>© Credit-Rewards-Cheatsheet.herokuapp.com. All rights reserved.</h5>
    </footer>
  );
};

const styles = {
  jumbotronStyle: {
    backgroundColor: 'gray',
    color: 'white',
    height: 200,
    padding: 50
  },
  linkColorStyle: {
    color: 'turquoise'
  },
  textStyle: {
    color: 'grey'
  }
};

export default Footer;
