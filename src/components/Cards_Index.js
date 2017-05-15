import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';

import CreditCardNavBar from './CreditCardNavBar';
import PurchaseCategories from './PurchaseCategories';
import CreditCardsList from './CreditCardsList';
import DisplayCard from './DisplayCard';
import Footer from './Footer';

class CardsIndex extends Component {
    componentWillMount() {
        this.props.fetchCards();
    }
    
    render() {
        // console.log(this.props.cards)
        return (
            <div>
                <CreditCardNavBar />
                <PurchaseCategories />
                <DisplayCard />
                <CreditCardsList />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps, { fetchCards })(CardsIndex);