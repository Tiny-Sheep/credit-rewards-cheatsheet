require ('dotenv')
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GettingStarted from './GettingStarted';
import CreditCardNavBar from './CreditCardNavBar';
import PurchaseCategories from './PurchaseCategories';
import CreditCardsList from './CreditCardsList';
import DisplayCard from './DisplayCard';
import Footer from './Footer';
// import Login from './Login'
// import { Router, Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      selectedCategory: null,
      bestCard: null,
      loggedIn: false,
      _id: "",
      client_id: process.env.GOGGLE_CLIENT_ID
    }
    this.setCategory = this.setCategory.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
  }


  setCategory(category) {
    var bestCard = this.findBest(this.state.cards, category)
    this.setState({
      selectedCategory: category,
      bestCard: bestCard
    })
  }

  findBest(cards, category) {
    let max = 0;
    let bestCard = null;
    cards.forEach( card => {
      if ( (card.category[category] * card.valuedEarning) > max ) {
        max = card.category[category] * card.valuedEarning;
        bestCard = card
      }
    })
    return bestCard;
  }

  setLoggedIn(googleUser) {
    const { email, name, imageUrl, googleId } = googleUser;
    this.setState({
      loggedIn: true,
      _id: googleId,
      name,
      email,
      imageUrl
    })
  }

  componentWillMount() {
    // const localServer = 'https://localhost:8080/creditcards';
    const creditCardDB = 'https://credit-card-rewards-database.herokuapp.com/creditcards.json'
    fetch(creditCardDB, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors'
    })
    .then( res => res.json() )
    .then( cards => {
      this.setState({
        cards: cards.creditcards
      })
    })
  }

  render() {
    const { appStyle } = styles;
    // const loggedIn = this.state.loggedIn;
    // if (loggedIn) {
    
      return (
        <div style={appStyle}>
          <CreditCardNavBar name={this.state.name}/>
          <GettingStarted />
          <PurchaseCategories
            setCategory={this.setCategory}
          />
          <DisplayCard
            card={this.state.bestCard}
            category={this.state.selectedCategory}
          />
          <CreditCardsList
            cards={this.state.cards}
          />
          <Footer />
        </div>
      );
    // } else {
    //   return (
    //     <Login setLoggedIn={this.setLoggedIn} />
    //   )
    // }
  }
}

const styles = {
  appStyle: {
    textAlign: 'center'
  }
};

export default App;



