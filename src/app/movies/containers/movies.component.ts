import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as forRoot from '../../reducers';
import * as fromMovies from '../reducers/movies.reducer';

@Component({
  selector: 'movies',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MoviesComponent implements OnInit {


  ngOnInit() {
  }

}
