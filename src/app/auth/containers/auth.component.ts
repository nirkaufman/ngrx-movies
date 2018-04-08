import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Authenticate} from '../models/user';
import {Login} from '../actions/auth.actions';

@Component({
  selector: 'auth',
  template: `
    <sign-in (authSubmit)="login($event)"></sign-in>
  `
})
export class AuthComponent {

  constructor(public store: Store<fromRoot.State>) {}

  login(userAuth: Authenticate) {
    this.store.dispatch(new Login(userAuth));
  }
}
