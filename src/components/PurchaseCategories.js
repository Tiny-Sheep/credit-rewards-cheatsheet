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
    const { jumbotronStyle, containerStyle, textStyle, groupBoxStyle } = styles;
    const { cards, userCards } = this.props;

    return (
      <div style={textStyle}>
        <h1>Step 2:</h1>
        <h2>Select Your Purchase Category</h2>
        <div style={containerStyle}>
          <ButtonGroup style={groupBoxStyle} block vertical bsSize="large">
            <Button onClick={ () => this.selectCategory('dining', userCards) }><span className="fa fa-cutlery"> Dining</span></Button>
            <Button onClick={ () => this.selectCategory('airfare', userCards) }><span className="fa fa-plane"> Airfare</span></Button>
            <Button onClick={ () => this.selectCategory('hotels', userCards) }><span className="fa fa-hotel"> Hotels</span></Button>
      
            <Button onClick={ () => this.selectCategory('ground_transportation', userCards) }><span className="fa fa-train"> Ground Trans.</span></Button>            
            <Button onClick={ () => this.selectCategory('gas', userCards) }><span className="fa fa-car"> Gas</span></Button>          

            <Button onClick={ () => this.selectCategory('amazon', userCards) }><span className="fa fa-amazon"> Amazon</span></Button>
            <Button onClick={ () => this.selectCategory('wholesale_clubs', userCards) }><span className="fa fa-gift"> Wholesale Clubs</span></Button>      

            <Button onClick={ () => this.selectCategory('groceries', userCards) }><span className="fa fa-shopping-cart"> Groceries</span></Button>
            <Button onClick={ () => this.selectCategory('department_stores', userCards) }><span className="fa fa-shopping-bag"> Department Stores</span></Button>

            <Button onClick={ () => this.selectCategory('entertainment', userCards) }><span className="fa fa-film"> Entertainment</span></Button>            
            <Button onClick={ () => this.selectCategory('drug_stores', userCards) }><span className="fa fa-medkit"> Drug Stores</span></Button>

            <Button onClick={ () => this.selectCategory('home_improvement', userCards) }><span className="fa fa-home"> Home Improvement</span></Button>          
            <Button onClick={ () => this.selectCategory('miscellaneous', userCards) }><span className="fa fa-coffee"> Misc.</span></Button>            
          </ButtonGroup>
        </div>
      </div>
    );
  }
};

const styles = {
  jumbotronStyle: {
    backgroundColor: 'rgb(200,240,255)'
  },
  containerStyle: {
    width: '55%',
    margin: '30px auto'
  },
  textStyle: {
    textShadow: '1px 1px 2px black',
    color: 'white',
    margin: 20
  }
};

function mapStateToProps(state) {
  return {
    cards: state.cards,
    userCards: state.userCards
  }
}

export default connect(mapStateToProps, { selectedCategory, findBestCard })(PurchaseCategories);
