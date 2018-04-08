import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthActions, AuthActionTypes} from '../actions/auth.actions';
import {User} from '../models/user';
import {resolveDefinition} from '@angular/core/src/view/util';

export interface State {
  loggedIn: boolean;
  user: User;
}

export const initialState: State = {
  loggedIn: false,
  user: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.LoginSuccess:
      return {
        loggedIn: true,
        user: action.payload.user
      };

    case AuthActionTypes.Logout:
      return initialState;

    default:
      return state;
  }
}

const fromAuth = createFeatureSelector<State>('auth');

export const getLoogedIn = createSelector(
  fromAuth,
  (authState) => authState.loggedIn
);
