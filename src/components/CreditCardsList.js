import React, { Component } from 'react';
// import { Button, ButtonGroup, Jumbotron } from 'react-bootstrap';
import { Panel, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap'

class CreditCardsList extends Component  {
  constructor() {
    super();
    this.state = {
      cards: this.props
    }
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h2>List of Credit Cards</h2>
          {this.props.cards.map( (card,i) => {
            return (
              <Panel collapsible header={card.name} key={i}>
                <ListGroup fill>
                  <ListGroupItem>Dining: {card.category.dining}x</ListGroupItem>
                  <ListGroupItem>Travel: {card.category.travel}x</ListGroupItem>
                  <ListGroupItem>Gas: {card.category.gas}x</ListGroupItem>
                  <ListGroupItem>Costco: {card.category.costco}x</ListGroupItem>
                  <ListGroupItem>Groceries: {card.category.groceries}x</ListGroupItem>
                  <ListGroupItem>Entertainment: {card.category.entertainment}x</ListGroupItem>
                  <ListGroupItem>Miscellaneous: {card.category.miscellaneous}x</ListGroupItem>
                  <ListGroupItem>Valued Earning: {card.valuedEarning}x</ListGroupItem>
                </ListGroup>
              </Panel>
            )}
          )}
        </Jumbotron>
      </div>
    )
  }
}

export default CreditCardsList;
