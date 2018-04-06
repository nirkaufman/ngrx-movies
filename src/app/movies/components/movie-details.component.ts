import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-details',
  template: `
    <div class="row">
      <div class="col-sm-4 offset-4">
        <div class="card">
          <img class="card-img-top" src="assets/1.jpg">
            <div class="card-body">
            <h5 class="card-title">The Matrix</h5>
            <h6 class="card-subtitle mb-2 text-muted">Released: 31 Mar 1999</h6>
            <p class="card-text">
              A computer hacker learns from mysterious rebels about the true nature of his reality and
              his role in the war against its controllers.
            </p>
            <p class="card-text">
              <small class="text-muted">
                <strong>Runtime:</strong> 136 min | <strong>Language</strong>: English
              </small>
            </p>
            <a href="#" class="btn btn-primary">Add</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class MovieDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
