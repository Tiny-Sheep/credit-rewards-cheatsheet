import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';

class CardsIndex extends Component {
    componentWillMount() {
        this.props.fetchCards();
    }
    
    render() {
        console.log(this.props.cards)
        return (
            <div>
                Hello
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps, { fetchCards })(CardsIndex);