import _ from 'lodash';
import axios from 'axios';
export const FETCH_CARDS = 'fetch_cards';
export const SELECTED_CATEGORY = 'selected_category';
export const BEST_CARD = 'best_card';
export const FIND_BEST_CARD = 'find_best_card';

const ROOT_URL = 'https://credit-card-rewards-database.herokuapp.com/creditcards.json';

export function fetchCards() {
    const request = axios.get(ROOT_URL)
    
    return {
        type: FETCH_CARDS,
        payload: request
    };    
}

export function selectedCategory(category) {
    return {
        type: SELECTED_CATEGORY,
        payload: category
    }
}

export function findBestCard(cards, category) {
    let max = 0;
    let bestCard = null;
    
    _.map(cards, card => {
      if ( (card.category[category] * card.valuedEarning) > max ) {
        max = card.category[category] * card.valuedEarning;
        bestCard = card;
      }
    })

    return {
        type: FIND_BEST_CARD,
        payload: bestCard
    }
}


export function bestCard(card) {
    return {
        type: BEST_CARD,
        payload: card
    }
}