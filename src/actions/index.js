// {
//     type: 'ADD_MOVIES',
//     movies: [m1,m2,m3],
// }

// {
//     type: 'REMOVE_MOVIES'
// }


// Actions types
export const ADD_MOVIES = 'ADD_MOVIES'


// Acction Creators
export function addMovies(movies){  //2
    return {
        type: ADD_MOVIES,
        movies : movies
    }
  }