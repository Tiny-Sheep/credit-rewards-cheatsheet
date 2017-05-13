import _ from 'lodash';
import { FETCH_CARDS, BEST_CARD } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_CARDS:
        return _.mapKeys(action.payload.data.creditcards, '_id');
    case BEST_CARD:
        return { ...state, bestCard:action.payload }
    default:
        return state;
    }
}