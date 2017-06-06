import React, { Component } from 'react';

import CreditCardNavBar from '../CreditCardNavBar';
import CreditCardsList from '../CreditCardsList';
import Footer from '../Footer';


class CardsShow extends Component {
    
    render() {
        return (
            <div>
                <CreditCardNavBar />
                <CreditCardsList />
                <Footer />
            </div>
        );
    }
}


export default CardsShow;
