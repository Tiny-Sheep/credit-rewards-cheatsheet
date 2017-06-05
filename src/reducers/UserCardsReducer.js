import { ADD_USER_CARD, REMOVE_USER_CARD } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case ADD_USER_CARD: 
            return [ ...state, action.payload ];
        case REMOVE_USER_CARD: 
            return [ ...state ];
        default:
            return state;
    }
}