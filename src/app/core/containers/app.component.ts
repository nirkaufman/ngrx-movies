import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <navbar></navbar>
    <page-layout>
      <router-outlet></router-outlet>
      <loader></loader>

      <snackbar></snackbar>

    </page-layout>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
