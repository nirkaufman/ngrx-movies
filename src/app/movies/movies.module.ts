import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './containers/movies.component';
import {CoreModule} from '../core/core.module';
import { MovieCollectionComponent } from './components/movie-collection.component';
import { MovieDetailsComponent } from './components/movie-details.component';
import {RouterModule} from '@angular/router';
import { MovieFinderComponent } from './components/movie-finder.component';
import { StoreModule } from '@ngrx/store';
import * as fromMovies from './reducers/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './effects/movies.effects';
import { MovieListComponent } from './components/movie-list.component';
import {HttpClientModule} from '@angular/common/http';
import {MovieFinderService} from './services/movie-finder.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forChild([
      {path: '', component: MovieFinderComponent},
      {path: 'collection', component: MovieCollectionComponent},
      {path: 'find', component: MovieFinderComponent},
      {path: ':id', component: MovieDetailsComponent},
    ]),
    StoreModule.forFeature('movies', fromMovies.reducers),
    EffectsModule.forFeature([MoviesEffects])
  ],
  providers: [MovieFinderService],
  declarations: [MoviesComponent, MovieCollectionComponent, MovieDetailsComponent, MovieFinderComponent, MovieListComponent],
  exports: [MoviesComponent]
})
export class MoviesModule { }
