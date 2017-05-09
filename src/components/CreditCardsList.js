import React from 'react';
// import { Button, ButtonGroup, Jumbotron } from 'react-bootstrap';
import { Panel, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap'

const CreditCardsList = ({ cards }) => {
  const { jumbotronStyle } = styles;    
  
  if (!cards) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <Jumbotron style={jumbotronStyle}>
        <h2>List of Credit Cards</h2>
        {cards.map(card => {
          return (
            <Panel collapsible header={card.name} key={card.name}>
              <ListGroup fill>
                <ListGroupItem>Dining: {card.category.dining}x</ListGroupItem>
                <ListGroupItem>Airfare: {card.category.airfare}x</ListGroupItem>
                <ListGroupItem>Hotels: {card.category.hotels}x</ListGroupItem>
                <ListGroupItem>Ground Transportation: {card.category.ground_transportation}x</ListGroupItem>
                <ListGroupItem>Gas: {card.category.gas}x</ListGroupItem>
                <ListGroupItem>Amazon: {card.category.amazon}x</ListGroupItem>
                <ListGroupItem>Wholesale Clubs: {card.category.wholesale_clubs}x</ListGroupItem>
                <ListGroupItem>Groceries: {card.category.groceries}x</ListGroupItem>
                <ListGroupItem>Department Stores: {card.category.department_stores}x</ListGroupItem>
                <ListGroupItem>Entertainment: {card.category.entertainment}x</ListGroupItem>
                <ListGroupItem>Home Improvement: {card.category.home_improvement}x</ListGroupItem>
                <ListGroupItem>Drug Stores: {card.category.drug_stores}x</ListGroupItem>
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

const styles = {
  jumbotronStyle: {
    backgroundColor: 'rgb(200,240,255)'
  }
};

export default CreditCardsList;
