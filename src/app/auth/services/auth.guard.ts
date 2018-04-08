import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {select, Store} from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import {map, take} from 'rxjs/internal/operators';
import {LoginRedirect} from '../actions/auth.actions';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoogedIn),
      map( authed => {
        if (!authed) {
          this.store.dispatch(new LoginRedirect());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
