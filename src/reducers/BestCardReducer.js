import { FIND_BEST_CARD } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
    case FIND_BEST_CARD:
        return { bestCard:action.payload }
    default:
        return state;
    }
}