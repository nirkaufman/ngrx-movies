import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './containers/movies.component';
import {CoreModule} from '../core/core.module';
import { MovieCollectionComponent } from './components/movie-collection.component';
import { MovieDetailsComponent } from './components/movie-details.component';
import {RouterModule} from '@angular/router';
import { MovieFinderComponent } from './components/movie-finder.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      {path: '', component: MovieCollectionComponent},
      {path: 'find', component: MovieFinderComponent},
      {path: ':id', component: MovieDetailsComponent},
    ])
  ],
  declarations: [MoviesComponent, MovieCollectionComponent, MovieDetailsComponent, MovieFinderComponent],
  exports: [MoviesComponent]
})
export class MoviesModule { }
