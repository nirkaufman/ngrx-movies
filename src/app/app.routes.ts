import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'movies', loadChildren: './movies/movies.module#MoviesModule'}
];

