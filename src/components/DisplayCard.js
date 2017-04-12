import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class DisplayCard extends Component {
  render() {
    if (!this.props.card) return null;
    let card = this.props.card
    let category = this.props.category
    return(
      <div>
        <Image src={card.image} thumbnail></Image>
        <h2>Use <span style={ {color: '#004d99', fontSize: '30px'} }>{card.name}</span> For <span style={ {color: '#004d99', fontSize: '30px'} }>{card.category[category]}x</span> Reward Points!</h2>
        <h2>Which is valued at <span style={ {color: 'green', fontSize: '30px'}}> { (card.valuedEarning * card.category[category]).toFixed(1)}</span> cents per dollar spent!</h2>
      </div>
    )
  }
}


export default DisplayCard
