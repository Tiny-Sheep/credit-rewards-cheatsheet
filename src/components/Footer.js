import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Footer = () => {
  const { jumbotronStyle, linkColorStyle } = styles; 

  return (
    <Jumbotron style={ jumbotronStyle }>
      <h5><a style={linkColorStyle} href="http://krystneto.github.io/portfolio/">About</a></h5>
      <h5>Email: <a style={ linkColorStyle } href="mailto:kkparchen@gmail.com">kkparchen@gmail.com</a></h5>
      <h5>©Kristopher Parchen</h5>
    </Jumbotron>
  );
};

const styles = {
  jumbotronStyle: {
    backgroundColor: 'gray',
    color: 'white'
  },
  linkColorStyle: {
    color: 'turquoise'
  },
  textStyle: {
    color: 'grey'
  }
};

export default Footer;
