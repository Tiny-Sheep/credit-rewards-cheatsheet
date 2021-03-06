import _ from 'lodash';
import axios from 'axios';
import {
    FETCH_CARDS,
    SELECTED_CATEGORY,
    FIND_BEST_CARD,
    BEST_CARD,
    ADD_USER_CARD,
    REMOVE_USER_CARD
} from './types';

const ROOT_URL = 'https://credit-card-rewards-database.herokuapp.com';

export function fetchCards() {
    const request = axios.get(`${ROOT_URL}/api/cards`);
    
    return {
        type: FETCH_CARDS,
        payload: request
    };    
};

export function selectedCategory(category) {
    return {
        type: SELECTED_CATEGORY,
        payload: category
    };
};

export function findBestCard(cards, category) {
    let max = 0;
    let bestCard = null;
    
    _.map(cards, card => {
      if ( (card.category[category] * card.valuedEarning) > max ) {
        max = card.category[category] * card.valuedEarning;
        bestCard = card;
      };
    });

    return {
        type: FIND_BEST_CARD,
        payload: bestCard
    };
};

export function bestCard(card) {
    return {
        type: BEST_CARD,
        payload: card
    }
}

export function addUserCard(event, userCards, cards) {
        
    const cardsArr = _.values(cards);

    const selectedCard = _.filter(cardsArr, card => {
        if (card.image === event.target.getAttribute('src')) {
            return card;
        };
    });

    const cardDuplicate = _.find(userCards, card => {
        return card._id === selectedCard[0]._id
    });

    let card = selectedCard[0];

    if (cardDuplicate) {
        const removeDuplicate = _.remove(userCards, userCard => {
            if (cardDuplicate.name === userCard.name) {
                return card
            } 
        })
    };

    return {
        type: ADD_USER_CARD,
        payload: card
    };
};

export function removeUserCard(card, userCards) {
    
    const removedCard = _.remove(userCards, userCard => {
    
    if (card.name === userCard.name) {
            return card
        }
    });
    
    return {
        type: REMOVE_USER_CARD,
        payload: userCards
    };
};