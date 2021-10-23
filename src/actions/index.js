// Actions types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';



// Acction Creators
export function addMovies(movies){  //2
    return {
        type: ADD_MOVIES,
        movies
    }
}


export function addFavourite(movie){  //2
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFromFavourite(movie){  //2
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie
    }
}


export function setShowFavourites(val){  //2
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}