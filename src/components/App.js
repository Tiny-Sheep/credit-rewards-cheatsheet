require ('dotenv')
import React, { Component } from 'react';
import '../App.css';
import GettingStarted from './GettingStarted';
import CreditCardNavBar from './CreditCardNavBar';
import PurchaseCategories from './PurchaseCategories';
import CreditCardsList from './CreditCardsList';
import DisplayCard from './DisplayCard';
import Footer from './Footer';
import Login from './Login'
// import { Router, Route} from 'react-router'



const chaseFreedom = {
  name: "Chase Freedom",
  category: {
    dining: 1,
    travel: 1,
    gas: 5,
    costco: 1,
    groceries: 1,
    entertainment: 1,
    miscellaneous: 1
  },
  valuedEarning: 2.1
}

const chaseSapphirePreferred = {
  name: "Chase Sapphire Preferred",
  category: {
    dining: 2,
    travel: 2,
    gas: 1,
    costco: 1,
    groceries: 1,
    entertainment: 1,
    miscellaneous: 1
  },
  valuedEarning: 2.1
}

const discoverCard = {
  name: "Discover it",
  category: {
    dining: 1,
    travel: 1,
    gas: 5,
    costco: 5,
    groceries: 1,
    entertainment: 1,
    miscellaneous: 1
  },
  valuedEarning: 1
}

const blueCashEveryday = {
  name: "Blue Cash Everyday by American Express",
  category: {
    dining: 1,
    travel: 1,
    gas: 3,
    costco: 1,
    groceries: 1,
    entertainment: 1,
    miscellaneous: 1
  },
  valuedEarning: 1.9
}

const cards = [chaseFreedom, chaseSapphirePreferred, discoverCard, blueCashEveryday];

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: cards,
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

  // componentWillMount() {
  //   // const url = 'https://dry-dusk-29159.herokuapp.com/creditcards';
  //   // const localServer = 'https://localhost:8080/creditcards';
  //   fetch('https://swapi.co/api/people/1', {
  //     'mode': 'no-cors'
  //   })
  //   .then( res => {
  //     return console.log(res)
  //   })
  //   .then( cards => {
  //     this.setState({
  //       cards: cards
  //     })
  //   })
  // }

  render() {
    const loggedIn = this.state.loggedIn;
    if (loggedIn) {
      return (
        <div className="App">
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
    } else {
      return (
        <Login setLoggedIn={this.setLoggedIn} />
      )
    }
  }
}


export default App;


