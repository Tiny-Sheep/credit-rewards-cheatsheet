import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Footer = () => {
  const { jumbotronStyle, linkColorStyle } = styles; 

  return (
    <Jumbotron style={ jumbotronStyle }>
      <h3>Updated May 15, 2017</h3>
      <h5><a href="http://krystneto.github.io/portfolio/">About Me</a></h5>
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
  }
};

export default Footer;
