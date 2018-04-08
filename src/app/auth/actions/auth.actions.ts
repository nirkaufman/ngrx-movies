import { Action } from '@ngrx/store';
import {Authenticate, User} from '../models/user';

export enum AuthActionTypes {
  Login         = '[Auth] Login',
  Logout        = '[Auth] Logout',
  LoginSuccess  = '[Auth] Login Success',
  LoginFailure  = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
}

export interface AuthAction extends Action {
  payload?: any;
}

export class Login implements AuthAction {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: Authenticate) {}
}

export class Logout implements AuthAction {
  readonly type = AuthActionTypes.Logout;
}

export class LoginSuccess implements AuthAction {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { user: User }) {}
}

export class LoginError implements AuthAction {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class LoginRedirect implements AuthAction {
  readonly type = AuthActionTypes.LoginRedirect;
}

export type AuthActions = Login | Logout | LoginSuccess | LoginError | LoginRedirect;
