import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-layout',
  template: `
    <main class="container">
      <ng-content></ng-content>
    </main>
  `,
  styles: []
})
export class PageLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
