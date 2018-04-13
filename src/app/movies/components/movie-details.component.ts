import { Component, OnInit } from '@angular/core';
import * as fromMovies from '../reducers/movies.reducer';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Movie} from '../models/movie';
import {AddMovieToCollection} from '../actions/movie-collection.actions';

@Component({
  selector: 'movie-details',
  template: `
    <div class="row">
      <div class="col-sm-4 offset-4">
        <div class="card">
          <img class="card-img-top" [src]="movie.Poster">
            <div class="card-body">
            <h5 class="card-title">{{movie.Title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Released: {{movie.Released}}</h6>
            <p class="card-text">
              {{movie.Plot}}
            </p>
            <p class="card-text">
              <small class="text-muted">
                <strong>Runtime:</strong> {{movie.Runtime}} | <strong>Language</strong>: {{movie.Language}}
              </small>
            </p>
            <button (click)="addMovie()" class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.pipe(select(fromMovies.getSelectedMovie))
      .subscribe( movie => this.movie = movie);
  }

  addMovie() {
    this.store.dispatch(new AddMovieToCollection(this.movie));
  }

}
