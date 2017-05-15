import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';

import CreditCardNavBar from './CreditCardNavBar';
import GettingStarted from './GettingStarted';
import PurchaseCategories from './PurchaseCategories';
import CreditCardsList from './CreditCardsList';
import DisplayCard from './DisplayCard';
import Footer from './Footer';

class CardsIndex extends Component {
    componentWillMount() {
        this.props.fetchCards();
    }
    
    render() {
        const { indexStyle } = styles;
        
        return (
            <div style={indexStyle}>
                <CreditCardNavBar />
                <GettingStarted />
                <PurchaseCategories />
                <DisplayCard />
                <CreditCardsList />
                <Footer />
            </div>
        );
    }
}

const styles = {
  indexStyle: {
    textAlign: 'center'
  }
};


function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps, { fetchCards })(CardsIndex);