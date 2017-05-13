import axios from 'axios'
export const FETCH_CARDS = 'fetch_cards';
export const SET_CATEGORY = 'set_category';
export const BEST_CARD = 'best_card';

const ROOT_URL = 'https://credit-card-rewards-database.herokuapp.com/creditcards.json';

export function fetchCards() {
    const request = axios.get(ROOT_URL)
    
    return {
        type: FETCH_CARDS,
        payload: request
    };    
}

export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        payload: category
    }
}

export function bestCard(card) {
    return {
        type: BEST_CARD,
        payload: card
    }
}