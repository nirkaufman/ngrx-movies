import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../models/movie';

@Component({
  selector: 'movie-list',
  template: `
    <div class="row">
      <ng-container *ngFor="let movie of items">
      <div class="col-sm-3"
           style="padding: 20px; box-sizing: border-box"
           *ngIf="movie.Poster !== 'N/A'"
           (click)="select.emit(movie.imdbID)">
        <div class="card">
          <img class="card-img-top" [src]="movie.Poster">
        </div>
      </div>
      </ng-container>
    </div>
  `,
  styles: []
})
export class MovieListComponent  {
  @Input() items: Movie[];
  @Output() select = new EventEmitter<string>();
}
