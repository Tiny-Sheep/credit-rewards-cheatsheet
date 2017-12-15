import _ from 'lodash';
import { FETCH_CARDS } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_CARDS:
        return _.mapKeys(action.payload.data, '_id');
    default:
        return state;
    }
}