import React, { Component } from 'react';
import '../App.css';
import GettingStarted from './GettingStarted';
import CreditCardNavBar from './CreditCardNavBar';
import PurchaseCategories from './PurchaseCategories';
import CreditCardsList from './CreditCardsList';
import DisplayCard from './DisplayCard';
import Footer from './Footer';
// import { Router, Route} from 'react-router'



// const chaseFreedom = {
//   name: "Chase Freedom",
//   category: {
//     dining: 1,
//     travel: 1,
//     gas: 5,
//     costco: 1,
//     groceries: 1,
//     entertainment: 1,
//     miscellaneous: 1
//   },
//   valuedEarning: 2.1
// }

// const chaseSapphirePreferred = {
//   name: "Chase Sapphire Preferred",
//   category: {
//     dining: 2,
//     travel: 2,
//     gas: 1,
//     costco: 1,
//     groceries: 1,
//     entertainment: 1,
//     miscellaneous: 1
//   },
//   valuedEarning: 2.1
// }

// const discoverCard = {
//   name: "Discover it",
//   category: {
//     dining: 1,
//     travel: 1,
//     gas: 5,
//     costco: 5,
//     groceries: 1,
//     entertainment: 1,
//     miscellaneous: 1
//   },
//   valuedEarning: 10
// }

// const blueCashEveryday = {
//   name: "Blue Cash Everyday by American Express",
//   category: {
//     dining: 1,
//     travel: 1,
//     gas: 3,
//     costco: 1,
//     groceries: 1,
//     entertainment: 1,
//     miscellaneous: 1
//   },
//   valuedEarning: 1.9
// }

// const cards = [chaseFreedom, chaseSapphirePreferred, discoverCard, blueCashEveryday];

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      selectedCategory: null,
      bestCard: null,
      userId: null
    }
    this.setCategory = this.setCategory.bind(this);
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

  componentDidMount() {
    const url = 'https://dry-dusk-29159.herokuapp.com/creditcards';
    fetch(url, {mode: 'no-cors'})
    .then( res => res.json(res) )
    .then( cards => {
      console.log(cards.creditcards)
      this.setState({
        cards: cards.creditcards
      })
    })
  }

  render() {
    return (
      <div className="App">
        <CreditCardNavBar />
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
  }
}


export default App;


