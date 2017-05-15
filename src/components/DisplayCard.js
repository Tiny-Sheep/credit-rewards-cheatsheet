import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';

class DisplayCard extends Component {
  render() {
    const { bestCard } = this.props.bestCard;
    const { selectedCategory } = this.props.selectedCategory;

    const { cardNameStyles, valueStyles } = styles;

    if (!bestCard) return <div></div>;
    
    return ( 
      <div>
        <Image src={bestCard.image} thumbnail></Image>
        
        <h2>Use <span style={ cardNameStyles }>{bestCard.name}</span> For <span style={ cardNameStyles }>{bestCard.category[selectedCategory]}x</span> Reward Points!</h2>
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
