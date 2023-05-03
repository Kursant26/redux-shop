const initialState = {
    favorites: []
}


export const FavoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE": {
            let bas = state.favorites.find(el => el.id === action.payload.id)
            if (bas) {
                return {...state, favorites: state.favorites.filter(el => el.id !== bas.id)}
            } else {
                return {...state, favorites: [...state.favorites, action.payload]}
            }
        }
        default:
            return state
    }
}