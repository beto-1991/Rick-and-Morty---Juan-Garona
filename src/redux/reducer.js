import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer =  (state = initialState, action ) => {
    switch(action.type){
        case ADD_TO_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case DELETE_FROM_FAVORITES:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            }
        case FILTER: 
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharsFiltered
            }
        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === 'Ascendente'
                    ? state.allCharacters.sort((a,b) => a.id - b.id)
                    : state.allCharacters.sort((a,b) => b.id - a.id)
            }    
        default: 
            return {...state}
    }
        
}

export default reducer;