import axios from 'axios'
export const FETCH_CARDS = 'fetch_cards';

const ROOT_URL = 'https://credit-card-rewards-database.herokuapp.com/creditcards.json';

export function fetchCards() {
    const request = axios.get(ROOT_URL)
    
    return {
        type: FETCH_CARDS,
        payload: request
    };    
}