import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Jumbotron } from 'react-bootstrap';

class DisplayCard extends Component {
  renderSelectedCategory(selectedCategory) {
    switch(selectedCategory) {
      case 'amazon':
        return 'Amazon'
      case 'dining':
        return 'Dining'
      case 'airfare':
        return 'Airfare'
      case 'hotels':
        return 'Hotel'
      case 'ground_transportation':
        return 'Ground Transportation'
      case 'gas':
        return 'Gas'
      case 'wholesale_clubs':
        return 'Wholesale Club'
      case 'groceries':
        return 'Grocery Store'
      case 'department_stores':
        return 'Department Store'
      case 'entertainment':
        return 'Entertainment'
      case 'home_improvement':
        return 'Home Improvement'
      case 'drug_stores':
        return 'Drug Store'
      case 'miscellaneous':
        return 'Miscellaneous'
      default:
        return ''
    }
  }
  
  render() {
    const { bestCard } = this.props.bestCard;
    const { selectedCategory } = this.props.selectedCategory;

    const { cardNameStyle, valueStyle, textStyle, jumbotronStyle } = styles;

    if (!bestCard) return <div style={ {visibility: 'hidden'} }></div>
    
    return ( 
      <Jumbotron style={jumbotronStyle}>
        <h2>For {this.renderSelectedCategory(selectedCategory)} purchases</h2>
        <h2>Use <span style={ cardNameStyle }>{bestCard.name}</span> For <span style={ cardNameStyle }>{bestCard.category[selectedCategory]}x</span> Reward Points!</h2>
        <Image src={bestCard.image} thumbnail></Image>
        <h2>Which is valued at <span style={ valueStyle }> { (bestCard.valuedEarning * bestCard.category[selectedCategory]).toFixed(1)}</span> cents per dollar spent!</h2>
      </Jumbotron>
    );
  }
}

const styles = {
  cardNameStyle: {
    color: '#004d99',
    fontSize: 30
  },
  valueStyle: { 
    color: 'green',
    fontSize: 30
  },
  textStyle: {
  },
  jumbotronStyle: {
    textShadow: '1px 1px 1px grey',
    padding: 20,
    marginTop: 30,
    backgroundColor: 'white'
  }
};

function mapStateToProps(state) {
  return {
    bestCard: state.bestCard,
    selectedCategory: state.selectedCategory
  }
}

export default connect(mapStateToProps)(DisplayCard);
