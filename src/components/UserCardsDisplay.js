import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserCardsDisplay extends Component {
    
    renderCards() {
        const { userCards } =  this.props;

        console.log(userCards)
        if (userCards.length < 1) {
            return <div></div>;
        }

        const cardList = userCards.map(card => <li key={card.name}>{card.name}</li>)
        return <ul>{cardList}</ul>
    }
    
    render() {
        const { textStyle } = styles;
        
        return (
            <div className="user-cards-display">
                <h2 style={textStyle}>Your Cards</h2>
                {this.renderCards()}
            </div>
        );
    }
}

const styles = {
    textStyle: {
        textShadow: '2px 2px 3px black',
        color: 'white'
    }
};

function mapStateToProps(state) {
    return {
        userCards: state.userCards
    }
}

export default connect(mapStateToProps)(UserCardsDisplay);