import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import CreditCardNavBar from '../CreditCardNavBar';
import GettingStarted from '../GettingStarted';
import PurchaseCategories from '../PurchaseCategories';
import UserCardsDisplay from '../UserCardsDisplay';
import CardListSelection from '../CardListSelection';
import DisplayCard from '../DisplayCard';
import Footer from '../Footer';

class CardsIndex extends Component {
    componentDidMount() {
        this.props.fetchCards();
    }
    
    render() {
        const { indexStyle } = styles;
            return (
                <div className="cards-index" style={indexStyle}>
                    <CreditCardNavBar />
                    <GettingStarted />
                    <CardListSelection />
                    <UserCardsDisplay />
                    <PurchaseCategories />
                    <DisplayCard />
                    <Footer />
                </div>
            );
    }
}

const styles = {
  indexStyle: {
    textAlign: 'center',
    backgroundColor: 'rgb(200,240,255)'
  }
};

export default connect(null, actions)(CardsIndex);