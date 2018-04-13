import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FindMoviesError, FindMoviesSuccess, MoviesActionTypes, MoviesActions, GetMovieInfoSuccess} from '../actions/movies.actions';
import {catchError, map, switchMap, tap} from 'rxjs/internal/operators';
import {MovieFinderService} from '../services/movie-finder.service';
import {of} from 'rxjs/index';
import {Router} from '@angular/router';

@Injectable()
export class MoviesEffects {

  @Effect()
  effect$ = this.actions$.pipe(
    ofType(MoviesActionTypes.FindMovies),
    map( (action: MoviesActions) => action.payload),
    switchMap( query => {

      return this.movies
        .findMoviesByTitle(query).pipe(
           map((movies) => new FindMoviesSuccess(movies)),
           catchError(err => of(new FindMoviesError(err)))
        );
    })
  );

  @Effect()
  movieInfo$ = this.actions$.pipe(
    ofType(MoviesActionTypes.GetMovieInfo),
    map( (action: MoviesActions) => action.payload),
    switchMap( id => {
      return this.movies
        .findMoviesById(id).pipe(
          map((movie) => new GetMovieInfoSuccess(movie)),
          tap( () => this.router.navigateByUrl('movies/${id}')),
          catchError(err => of(new FindMoviesError(err)))
        );
    })
  );

  constructor(private actions$: Actions, private movies: MovieFinderService, private router: Router) {
  }
}
