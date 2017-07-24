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
    
    const { 
      jumbotronStyle, 
      containerStyle, 
      textStyle, 
      groupBoxStyle,
      categoryTextStyle
   } = styles;

    const { cards, userCards } = this.props;

    return (
      <div className="purchase-categories">
        <h1 style={textStyle}>Step 2:</h1>
        <h2 style={textStyle}>Select Your Purchase Category</h2>
        <div style={containerStyle}>
          <ButtonGroup style={groupBoxStyle} block vertical bsSize="large">
            <Button onClick={ () => this.selectCategory('dining', userCards) }><span className="fa fa-cutlery"> <p style={categoryTextStyle}>Dining</p></span></Button>
            <Button onClick={ () => this.selectCategory('airfare', userCards) }><span className="fa fa-plane"> <p style={categoryTextStyle}>Airfare</p></span></Button>
            <Button onClick={ () => this.selectCategory('hotels', userCards) }><span className="fa fa-hotel"> <p style={categoryTextStyle}>Hotels</p></span></Button>
      
            <Button onClick={ () => this.selectCategory('ground_transportation', userCards) }><span className="fa fa-train"> <p style={categoryTextStyle}>Ground Trans.</p></span></Button>            
            <Button onClick={ () => this.selectCategory('gas', userCards) }><span className="fa fa-car"> <p style={categoryTextStyle}>Gas</p></span></Button>          

            <Button onClick={ () => this.selectCategory('amazon', userCards) }><span className="fa fa-amazon"> <p style={categoryTextStyle}>Amazon</p></span></Button>
            <Button onClick={ () => this.selectCategory('wholesale_clubs', userCards) }><span className="fa fa-gift"> <p style={categoryTextStyle}>Wholesale Clubs</p></span></Button>      

            <Button onClick={ () => this.selectCategory('groceries', userCards) }><span className="fa fa-shopping-cart"> <p style={categoryTextStyle}>Groceries</p></span></Button>
            <Button onClick={ () => this.selectCategory('department_stores', userCards) }><span className="fa fa-shopping-bag"> <p style={categoryTextStyle}>Department Stores</p></span></Button>

            <Button onClick={ () => this.selectCategory('entertainment', userCards) }><span className="fa fa-film"> <p style={categoryTextStyle}>Entertainment</p></span></Button>            
            <Button onClick={ () => this.selectCategory('drug_stores', userCards) }><span className="fa fa-medkit"> <p style={categoryTextStyle}>Drug Stores</p></span></Button>

            <Button onClick={ () => this.selectCategory('home_improvement', userCards) }><span className="fa fa-home"> <p style={categoryTextStyle}>Home Improvement</p></span></Button>          
            <Button onClick={ () => this.selectCategory('miscellaneous', userCards) }><span className="fa fa-coffee"> <p style={categoryTextStyle}>Misc.</p></span></Button>            
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
    margin: '2em auto'
  },
  textStyle: {
    textShadow: '1px 1px 2px black',
    color: 'white',
    margin: 20
  },
  categoryTextStyle: {
    color: 'black',
    fontFamily: "Helvetica",
    fontSize: 20,
    marginTop: 20
  }
};

function mapStateToProps(state) {
  return {
    cards: state.cards,
    userCards: state.userCards
  }
}

export default connect(mapStateToProps, { selectedCategory, findBestCard })(PurchaseCategories);
