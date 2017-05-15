import _ from 'lodash';
import { FETCH_CARDS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_CARDS:
        return _.mapKeys(action.payload.data.creditcards, '_id');
    default:
        return state;
    }
}