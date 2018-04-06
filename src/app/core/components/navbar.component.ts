import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">My Movie Collection</a>

          <!-- Begin Search -->
          <form class="form-inline">
            <input class="form-control" placeholder="Search...">
          </form>

        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
