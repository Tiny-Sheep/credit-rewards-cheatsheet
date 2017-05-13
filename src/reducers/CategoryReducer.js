import { SET_CATEGORY } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
    case SET_CATEGORY:
        return { ...state, setCategory: action.payload }
    default:
        return state;
    }
}