import React, { Component } from 'react';

import CreditCardNavBar from '../CreditCardNavBar';
import GettingStarted from '../GettingStarted';
import NotFound from '../NotFound';
import Footer from '../Footer';


class NotFound_Route extends Component {
    
    render() {
        return (
            <div>
                <CreditCardNavBar />
                <GettingStarted />
                <NotFound />
                <Footer />
            </div>
        );
    }
}


export default NotFound_Route;