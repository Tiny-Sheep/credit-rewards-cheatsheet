import React from 'react';
import { Image } from 'react-bootstrap';

const DisplayCard = (props) => {
  const { card, category } = props;
  const { cardNameStyles, valueStyles } = styles;

  if (!card) return null;
  
  return ( 
    <div>
      <Image src={card.image} thumbnail></Image>
      
      <h2>Use <span style={ cardNameStyles }>{card.name}</span> For <span style={ cardNameStyles }>{card.category[category]}x</span> Reward Points!</h2>
      <h2>Which is valued at <span style={ valueStyles }> { (card.valuedEarning * card.category[category]).toFixed(1)}</span> cents per dollar spent!</h2>
    
    </div>
  );
};

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

export default DisplayCard;
