import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {resultsReducer} from './results.reducer';
import {Movie} from '../models/movie';
import {collectionReducer} from './collection.reducer';
import {selectedReducer} from './selected.reducer';

export interface State {
  selectedMovie: Movie;
  results: Movie[];
  collection: {[id: string]: Movie};
}

export const reducers: ActionReducerMap<State> = {
    results : resultsReducer,
    collection: collectionReducer,
    selectedMovie: selectedReducer
};

const getMovies = createFeatureSelector<State>('movies');

export const getResults = createSelector(
  getMovies,
  movies => movies.results
);

export const getSelectedMovie = createSelector(
  getMovies,
  movies => movies.selectedMovie
);

export const getCollection = createSelector(
  getMovies,
  movies => {
    const results = [];
    Object.keys(movies.collection).forEach( id => results.push(movies.collection[id]));
    return results;
  });
