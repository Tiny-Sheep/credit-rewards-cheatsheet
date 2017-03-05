import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';

class PurchaseCategories extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h2>Select Your Category</h2>

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.props.setCategory('dining')}><span className="fa fa-spoon"> Dining</span></Button>
            <Button onClick={ () => this.props.setCategory('travel')}><span className="fa fa-plane"> Travel</span></Button>
            <Button onClick={ () => this.props.setCategory('entertainment')}><span className="fa fa-film"> Entertainment</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.props.setCategory('costco')}><span className="fa fa-gift"> Costco</span></Button>
            <Button onClick={ () => this.props.setCategory('groceries')}><span className="fa fa-shopping-cart"> Groceries</span></Button>
            <Button onClick={ () => this.props.setCategory('gas') }><span className="fa fa-car"> Gas</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.props.setCategory('miscellaneous') }><span className="fa fa-coffee"> Misc.</span></Button>
          </ButtonGroup>

        </Jumbotron>
        {this.props.children}
      </div>
    )
  }
}

export default PurchaseCategories
