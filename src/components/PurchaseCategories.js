import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, ButtonGroup } from 'react-bootstrap';
import { selectedCategory, findBestCard } from '../actions';

class PurchaseCategories extends Component { 
   constructor() {
     super();

     this.selectCategory = this.selectCategory.bind(this);
  }
   
   selectCategory(category, cards) {
      this.props.findBestCard(cards, category);
      this.props.selectedCategory(category);
  }
  
  
  render() {
    const { jumbotronStyle } = styles;
    const { cards } = this.props;

    return (
      <div>
        <Jumbotron style={jumbotronStyle}>
          <h2>Select Your Category</h2>

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('dining', cards) }><span className="fa fa-cutlery"> Dining</span></Button>
            <Button onClick={ () => this.selectCategory('airfare', cards) }><span className="fa fa-plane"> Airfare</span></Button>
            <Button onClick={ () => this.selectCategory('hotels', cards) }><span className="fa fa-hotel"> Hotels</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('ground_transportation', cards) }><span className="fa fa-train"> Ground Transportation</span></Button>            
            <Button onClick={ () => this.selectCategory('gas', cards) }><span className="fa fa-car"> Gas</span></Button>          
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('amazon', cards) }><span className="fa fa-amazon"> Amazon</span></Button>
            <Button onClick={ () => this.selectCategory('wholesale_clubs', cards) }><span className="fa fa-gift"> Wholesale Clubs</span></Button>      
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('groceries', cards) }><span className="fa fa-shopping-cart"> Groceries</span></Button>
            <Button onClick={ () => this.selectCategory('department_stores', cards) }><span className="fa fa-shopping-bag"> Department Stores</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('entertainment', cards) }><span className="fa fa-film"> Entertainment</span></Button>            
            <Button onClick={ () => this.selectCategory('drug_stores', cards) }><span className="fa fa-medkit"> Drug Stores</span></Button>
          </ButtonGroup>

          <br />
          <br />

          <ButtonGroup bsSize="large">
            <Button onClick={ () => this.selectCategory('home_improvement', cards) }><span className="fa fa-home"> Home Improvement</span></Button>          
            <Button onClick={ () => this.selectCategory('miscellaneous', cards) }><span className="fa fa-coffee"> Misc.</span></Button>            
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

export default connect(mapStateToProps, { selectedCategory, findBestCard })(PurchaseCategories);
