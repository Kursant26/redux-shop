import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainReducer} from "../reducer/reducer";
import {BasketReducer} from "../reducer/BasketReducer";
import {FavoriteReducer} from "../reducer/FavoriteReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReducer,
    favorites: FavoriteReducer,
    // details: DetailsReducer
}), composeWithDevTools(applyMiddleware(thunk)))