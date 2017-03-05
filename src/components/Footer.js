import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return(
      <div>
        <Jumbotron style={ {background: 'gray', color: 'white'} }>
          <h3>Valued earnings rates are based on <a href="http://www.thepointsguy.com">ThePointsGuy</a></h3>
          <h5>Created by Kristopher Parrillo</h5>
          <h5>Email: kkparrillo@gmail.com</h5>
        </Jumbotron>
      </div>
    )
  }
}

export default Footer
