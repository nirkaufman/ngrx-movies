import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {FindMovies} from '../actions/movies.actions';
import * as fromRoot from '../../reducers';
import * as fromMovies from '../reducers/movies.reducer';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'movie-collection',
  template: `
    <movie-list [items]="movies$ | async"></movie-list>
  `,
  styles: []
})
export class MovieCollectionComponent implements OnInit {
  movies$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new FindMovies('matrix'));
    this.movies$ = this.store.pipe(select(fromMovies.getCollection));
  }

}
