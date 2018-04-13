import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {FindMovies, GetMovieInfo} from '../actions/movies.actions';
import {Observable} from 'rxjs/index';
import * as fromMovies from '../reducers/movies.reducer';
import {Router} from '@angular/router';

@Component({
  selector: 'movie-finder',
  template: `
    <div class="row">
      <movie-list [items]="movies$ | async" (select)="selectMovie($event)"></movie-list>
    </div>
  `,
  styles: []
})
export class MovieFinderComponent implements OnInit {
  movies$: Observable<any>;

  constructor(private store: Store<fromRoot.State>, public router: Router) {
  }

  ngOnInit() {
    this.store.dispatch(new FindMovies('matrix'));
    this.movies$ = this.store.pipe(select(fromMovies.getResults));
  }

  selectMovie(id: string) {
    this.store.dispatch(new GetMovieInfo(id));
  }

}
