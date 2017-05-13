import { combineReducers } from 'redux';
import cardsReducer from './CardsReducer';
import categoryReducer from './CategoryReducer';

const rootReducer = combineReducers({
    cards: cardsReducer,
    setCategory: categoryReducer
})

export default rootReducer;
