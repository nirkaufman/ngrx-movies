import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, Login, LoginSuccess} from '../actions/auth.actions';
import {catchError, exhaustMap, map, tap} from 'rxjs/internal/operators';
import {Router} from '@angular/router';
import {Authenticate} from '../models/user';
import {AuthService} from '../services/auth.service';
import {ShowNotification} from '../../core/actions/core.actions';
import {of} from 'rxjs/index';

@Injectable()
export class AuthEffects {

  @Effect()
  loginEffect = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((authInfo: Authenticate) =>
      this.authService
        .login(authInfo)
        .pipe(
          map(user => new LoginSuccess({user})),
          catchError(error => of(new ShowNotification(error)))
        )
    )
  );

  @Effect({dispatch: false})
  loginSuccess = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap( () => this.route.navigate(['movies']))
  );

  @Effect({dispatch: false})
  effect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap( () => this.route.navigate(['auth']))
  );

  constructor(private actions$: Actions, private route: Router, private authService: AuthService) {}
}
