import {Action} from '@ngrx/store';

export enum MovieCollectionActionTypes {
  AddMovieToCollection = '[Movie Collection] Add ',
  RemoveMovieToCollection = '[Movie Collection] Remove ',
}

export interface MoviesAction extends Action {
  payload?: any;
}

export class AddMovieToCollection implements MoviesAction {
  readonly type = MovieCollectionActionTypes.AddMovieToCollection;

  constructor(public payload: any) {
  }
}

export class RemoveMovieToCollection implements MoviesAction {
  readonly type = MovieCollectionActionTypes.RemoveMovieToCollection;

  constructor(public payload: any) {
  }
}

export type MovieCollectionActions = AddMovieToCollection | RemoveMovieToCollection;
