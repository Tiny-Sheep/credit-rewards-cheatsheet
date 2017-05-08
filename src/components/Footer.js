import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Footer = () => {
  const { jumbotronStyle, linkColorStyle } = styles; 

  return (
    <Jumbotron style={ jumbotronStyle }>
      <h3>Updated May 07, 2017</h3>
      <h3>Valued earnings rates are based on <a style={ linkColorStyle } href="http://www.thepointsguy.com">ThePointsGuy</a></h3>
      <h5>Created by Kristopher Parchen</h5>
      <h5>Contact: <a style={ linkColorStyle } href="mailto:kkparchen@gmail.com">kkparchen@gmail.com</a></h5>
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
