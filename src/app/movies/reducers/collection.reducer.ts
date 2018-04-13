import { MovieCollectionActionTypes, MovieCollectionActions } from '../actions/movie-collection.actions';
import {Movie} from '../models/movie';

// initial state
export const initialState: {[id: string]: Movie} = {};

// reducer
export function collectionReducer(state = initialState, action: MovieCollectionActions) {

  switch (action.type) {

    case MovieCollectionActionTypes.AddMovieToCollection:
      const movie = action.payload;
      return {...state, [movie.imdbID]: movie};

    default:
      return state;
  }
}

