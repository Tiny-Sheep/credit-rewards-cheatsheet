import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Footer = () => {
  const { jumbotronStyle, linkColor } = styles; 

  return (
    <Jumbotron style={ jumbotronStyle }>
      <h3>Updated 04/12/2017</h3>
      <h3>Valued earnings rates are based on <a style={ linkColor } href="http://www.thepointsguy.com">ThePointsGuy</a></h3>
      <h5>Created by Kristopher Parchen</h5>
      <h5>Contact: <a style={ linkColor } href="mailto:kkparchen@gmail.com">kkparchen@gmail.com</a></h5>
    </Jumbotron>
  );
};

const styles = {
  jumbotronStyle: {
    backgroundColor: 'gray',
    color: 'white'
  },
  linkColor: {
    color: 'turquoise'
  }
};

export default Footer;
