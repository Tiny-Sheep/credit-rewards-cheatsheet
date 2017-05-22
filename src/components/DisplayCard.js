import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Jumbotron } from 'react-bootstrap';

class DisplayCard extends Component {
  renderSelectedCategory(selectedCategory) {
    switch(selectedCategory) {
      case 'amazon':
        'Amazon';
        break;
      case 'dining':
        'Dining';
        break;
      case 'airfare':
        'Airfare';
        break;
      case 'hotels':
        'Hotel';
        break;
      case 'ground_transportation':
        'Ground Transportation';
        break;
      case 'gas':
        'Gas';
        break;
      case 'wholesale_clubs':
        'Wholesale Club';
        break;
      case 'groceries':
        'Grocery Store';
        break;
      case 'department_stores':
        'Department Store';
        break;
      case 'entertainment':
        'Entertainment';
        break;
      case 'home_improvement':
        'Home Improvement';
        break;
      case 'drug_stores':
        'Drug Store';
        break;
      case 'miscellaneous':
        'Miscellaneous';
        break;
      default:
        '';
        break;
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
    backgroundColor: 'rgba(255,255,255,.6)'
  }
};

function mapStateToProps(state) {
  return {
    bestCard: state.bestCard,
    selectedCategory: state.selectedCategory
  }
}

export default connect(mapStateToProps)(DisplayCard);
