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
        const { indexStyle } = styles;
        
        return (
            <div style={indexStyle}>
                <CreditCardNavBar />
                <PurchaseCategories />
                <DisplayCard />
                <Footer />
            </div>
        );
    }
}

// const imgURL = 'http://i.imgur.com/cqxzeR2.jpg'
const styles = {
  indexStyle: {
    textAlign: 'center',
    backgroundColor: 'rgb(200,240,255)'
  }
};


function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps, { fetchCards })(CardsIndex);