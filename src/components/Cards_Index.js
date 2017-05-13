import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, setCategory } from '../actions';

import CreditCardNavBar from './CreditCardNavBar';
import PurchaseCategories from './PurchaseCategories';
import CreditCardsList from './CreditCardsList';
import DisplayCard from './DisplayCard';

class CardsIndex extends Component {
    componentWillMount() {
        this.props.fetchCards();
    }
    
    render() {
        return (
            <div>
                <CreditCardNavBar />
                <PurchaseCategories />
                <CreditCardsList />
                <DisplayCard />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards,
        selectedCategory: state.setCategory
    }
}

export default connect(mapStateToProps, { fetchCards, setCategory })(CardsIndex);