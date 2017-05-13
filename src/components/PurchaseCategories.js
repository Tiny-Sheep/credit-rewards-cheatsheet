import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, ButtonGroup } from 'react-bootstrap';
import { setCategory } from '../actions';

class PurchaseCategories extends Component { 
   constructor() {
     super();

     this.selectCategory = this.selectCategory.bind(this);
     this.findBest = this.findBest.bind(this);
  }
   
   selectCategory(category) {
      this.props.setCategory(category);
      this.findBest(cards, category)
  }
  
  findBest(cards, category) {
    let max = 0;
    let bestCard = null;
    cards.forEach( card => {
      if ( (card.category[category] * card.valuedEarning) > max ) {
        max = card.category[category] * card.valuedEarning;
        bestCard = card
      }
    })
    return bestCard;
  }  
  
  render() {
    const { jumbotronStyle } = styles;
    
    return (
      <div>
        <Jumbotron style={jumbotronStyle}>
          <h2>Select Your Category</h2>

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('dining') }><span className="fa fa-cutlery"> Dining</span></Button>
            <Button onClick={ () => this.selectCategory('airfare') }><span className="fa fa-plane"> Airfare</span></Button>
            <Button onClick={ () => this.selectCategory('hotels') }><span className="fa fa-hotel"> Hotels</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('ground_transportation') }><span className="fa fa-train"> Ground Transportation</span></Button>            
            <Button onClick={ () => this.selectCategory('gas') }><span className="fa fa-car"> Gas</span></Button>          
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('amazon') }><span className="fa fa-amazon"> Amazon</span></Button>
            <Button onClick={ () => this.selectCategory('wholesale_clubs') }><span className="fa fa-gift"> Wholesale Clubs</span></Button>      
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('groceries') }><span className="fa fa-shopping-cart"> Groceries</span></Button>
            <Button onClick={ () => this.selectCategory('department_stores') }><span className="fa fa-shopping-bag"> Department Stores</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('entertainment') }><span className="fa fa-film"> Entertainment</span></Button>            
            <Button onClick={ () => this.selectCategory('drug_stores') }><span className="fa fa-medkit"> Drug Stores</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('home_improvement') }><span className="fa fa-home"> Home Improvement</span></Button>          
            <Button onClick={ () => this.selectCategory('miscellaneous') }><span className="fa fa-coffee"> Misc.</span></Button>            
          </ButtonGroup>

        </Jumbotron>
      </div>
    );
  }
};

const styles = {
  jumbotronStyle: {
    backgroundColor: 'rgb(200,240,255)'
  }
};

function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps, { setCategory })(PurchaseCategories);
