import {MoviesActionTypes, MoviesActions} from '../actions/movies.actions';
import {Movie} from '../models/movie';

// initial state
export const initialState: Movie[] = [];

// reducer
export function resultsReducer(state = initialState, action: MoviesActions): Movie[] {
  switch (action.type) {

    case MoviesActionTypes.FindMoviesSuccess:
      return action.payload as Movie[];

    default:
      return state as Movie[];
  }
}
