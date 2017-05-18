import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';

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

    const { cardNameStyles, valueStyles } = styles;

    if (!bestCard) return <div></div>;
    
    return ( 
      <div>
        <h2>For {this.renderSelectedCategory(selectedCategory)} purchases</h2>
        <h2>Use <span style={ cardNameStyles }>{bestCard.name}</span> For <span style={ cardNameStyles }>{bestCard.category[selectedCategory]}x</span> Reward Points!</h2>
        <Image src={bestCard.image} thumbnail></Image>
        <h2>Which is valued at <span style={ valueStyles }> { (bestCard.valuedEarning * bestCard.category[selectedCategory]).toFixed(1)}</span> cents per dollar spent!</h2>
      </div>
    );
  }
}

const styles = {
  cardNameStyles: {
    color: '#004d99',
    fontSize: 30
  },
  valueStyles: { 
    color: 'green',
    fontSize: 30
  }
};

function mapStateToProps(state) {
  return {
    bestCard: state.bestCard,
    selectedCategory: state.selectedCategory
  }
}

export default connect(mapStateToProps)(DisplayCard);
