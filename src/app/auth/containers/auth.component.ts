import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth',
  template: `
      <sign-in></sign-in>
  `,
  styles: []
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
