import {MoviesActionTypes, MoviesActions} from '../actions/movies.actions';
import {Movie} from '../models/movie';

// initial state
export const initialState: Movie = {};

// reducer
export function selectedReducer(state = initialState, action: MoviesActions): Movie {

  switch (action.type) {
    case MoviesActionTypes.GetMovieInfoSuccess:
      return action.payload;

    default:
      return state;
  }
}
