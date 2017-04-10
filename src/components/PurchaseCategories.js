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
            <Button onClick={ () => this.props.setCategory('dining')}><span className="fa fa-cutlery"> Dining</span></Button>
            <Button onClick={ () => this.props.setCategory('airfare')}><span className="fa fa-plane"> Airfare</span></Button>
            <Button onClick={ () => this.props.setCategory('hotels')}><span className="fa fa-hotel"> Hotels</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.props.setCategory('ground_transportation')}><span className="fa fa-train"> Ground Transportation</span></Button>            
            <Button onClick={ () => this.props.setCategory('gas') }><span className="fa fa-car"> Gas</span></Button>          
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.props.setCategory('amazon')}><span className="fa fa-amazon"> Amazon</span></Button>
            <Button onClick={ () => this.props.setCategory('wholesale_clubs')}><span className="fa fa-gift"> Wholesale Clubs</span></Button>      
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.props.setCategory('groceries')}><span className="fa fa-shopping-cart"> Groceries</span></Button>
            <Button onClick={ () => this.props.setCategory('department_stores')}><span className="fa fa-shopping-bag"> Department Stores</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.props.setCategory('entertainment')}><span className="fa fa-film"> Entertainment</span></Button>            
            <Button onClick={ () => this.props.setCategory('drug_stores')}><span className="fa fa-medkit"> Drug Stores</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.props.setCategory('home_improvement')}><span className="fa fa-home"> Home Improvement</span></Button>          
            <Button onClick={ () => this.props.setCategory('miscellaneous') }><span className="fa fa-coffee"> Misc.</span></Button>            
          </ButtonGroup>

        </Jumbotron>
        {this.props.children}
      </div>
    )
  }
}

export default PurchaseCategories
