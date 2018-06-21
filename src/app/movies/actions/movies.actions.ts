import { Action } from '@ngrx/store';

export enum MoviesActionTypes {
  FindMovies = '[Movies] Find movies',
  FindMoviesSuccess = '[Movies] Find Movies Success',
  FindMoviesError = '[Movies] Find Movies Error',
  GetMovieInfo = '[Movies] Get Movie Info',
  GetMovieInfoSuccess = '[Movies] Get Movie Info Success',
}

export interface MoviesAction extends Action {
  payload?: any;
}

export class FindMovies implements MoviesAction {
  readonly type = MoviesActionTypes.FindMovies;

  constructor(public payload: any) {
  }
}

export class FindMoviesSuccess implements MoviesAction {
  readonly type = MoviesActionTypes.FindMoviesSuccess;

  constructor(public payload: any) {
  }
}

export class FindMoviesError implements MoviesAction {
  readonly type = MoviesActionTypes.FindMoviesError;

  constructor(public payload: any) {
  }
}

export class GetMovieInfo implements MoviesAction {
  readonly type = MoviesActionTypes.GetMovieInfo;

  constructor(public payload: any) {
  }
}

export class GetMovieInfoSuccess implements MoviesAction {
  readonly type = MoviesActionTypes.GetMovieInfoSuccess;

  constructor(public payload: any) {
  }
}

export type MoviesActions = FindMovies | FindMoviesSuccess | GetMovieInfo | GetMovieInfoSuccess;
