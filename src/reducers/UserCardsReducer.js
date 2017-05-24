import { ADD_USER_CARD } from '../actions';

export default function(state = [], action) {
    switch(action.type) {
        case ADD_USER_CARD: 
            return [ ...state, action.payload ];
    }
    
    return state;
}