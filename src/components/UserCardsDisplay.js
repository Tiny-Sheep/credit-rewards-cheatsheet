import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserCardsDisplay extends Component {
    
    renderCards() {
        const { userCards } =  this.props;
        console.log(userCards)
        if (userCards.length < 1) {
            return <div>Add Your Cards</div>;
        }

        const cardList = userCards.map(card => <li key={card.name}>{card.name}</li>)
        return <ul>{cardList}</ul>
    }
    
    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userCards: state.userCards
    }
}

export default connect(mapStateToProps)(UserCardsDisplay);