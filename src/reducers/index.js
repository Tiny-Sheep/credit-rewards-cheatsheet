import { combineReducers } from 'redux';
import cardsReducer from './CardsReducer';
import categoryReducer from './CategoryReducer';
import bestCardReducer from './BestCardReducer';
import userCardsReducer from './UserCardsReducer'

const rootReducer = combineReducers({
    cards: cardsReducer,
    selectedCategory: categoryReducer,
    bestCard: bestCardReducer,
    userCards: userCardsReducer
})

export default rootReducer;
