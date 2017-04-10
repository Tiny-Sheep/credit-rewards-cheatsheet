import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return(
      <div>
        <Jumbotron style={ {background: 'gray', color: 'white'} }>
          <h3>Updated 04/10/2017</h3>
          <h3>Valued earnings rates are based on <a href="http://www.thepointsguy.com">ThePointsGuy</a></h3>
          <h5>Created by Kristopher Parchen</h5>
          <h5>Contact: <a href="mailto:kkparchen@gmail.com">kkparchen@gmail.com</a></h5>
        </Jumbotron>
      </div>
    )
  }
}

export default Footer
