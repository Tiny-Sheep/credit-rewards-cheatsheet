import { SELECTED_CATEGORY } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
    case SELECTED_CATEGORY:
        return { selectedCategory: action.payload }
    default:
        return state;
    }
}