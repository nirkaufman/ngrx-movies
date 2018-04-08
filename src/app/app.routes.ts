import {Routes} from '@angular/router';
import {AuthGuard} from './auth/services/auth.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {
    path: 'movies',
    loadChildren: './movies/movies.module#MoviesModule',
    canActivate: [AuthGuard]
  }
];

