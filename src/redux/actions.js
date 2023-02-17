import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES, FILTER, ORDER } from "./action-types"


export const addToFavorites = (character) => {
    return {type: ADD_TO_FAVORITES, payload: character}
}


export const deleteFromFavorites = (id) => {
    return {type: DELETE_FROM_FAVORITES, payload: id}
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (id) => {
    return {type: ORDER, payload: id }
}