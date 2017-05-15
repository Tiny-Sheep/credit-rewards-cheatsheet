import { combineReducers } from 'redux';
import cardsReducer from './CardsReducer';
import categoryReducer from './CategoryReducer';
import bestCardReducer from './BestCardReducer';

const rootReducer = combineReducers({
    cards: cardsReducer,
    selectedCategory: categoryReducer,
    bestCard: bestCardReducer
})

export default rootReducer;
