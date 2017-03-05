import React, { Component } from 'react'


class DisplayCard extends Component {
  render() {
    if (!this.props.card) return null;
    let card = this.props.card
    let category = this.props.category
    return(
      <div>
        <h2>Use <span style={ {color: 'blue', fontSize: '30px'} }>{card.name}</span> For <span style={ {color: 'green', fontSize: '30px'} }>{card.category[category]}x</span> Reward Points!</h2>
        <h2>Which is valued at <span style={ {color: 'red', fontSize: '30px'}}> {card.valuedEarning * card.category[category]}</span> cents per dollar spent!</h2>
      </div>
    )
  }
}


export default DisplayCard
