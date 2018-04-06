import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
