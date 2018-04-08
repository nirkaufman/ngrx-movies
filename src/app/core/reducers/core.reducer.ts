import { CoreActions, CoreActionTypes } from '../actions/core.actions';
import {createSelector} from '@ngrx/store';

// define and init the state
export interface State {
  loading: boolean;
  notifications: string[];
}

export const initialState: State = {
  loading: false,
  notifications: []
};

// reducers
export function layoutReducer(state = initialState, action: CoreActions): State {
  switch (action.type) {

    case CoreActionTypes.ShowLoader:
      return {...state, loading: true};

    case CoreActionTypes.HideLoader:
      return {...state, loading: false};

    case CoreActionTypes.ShowNotification:
      return {...state, notifications: [action.payload, ...state.notifications]};

    case CoreActionTypes.HideNotification:
      return {...state, notifications: state.notifications.slice(0, -1)};

    default:
      return state;
  }
}

// selectors
export const getLayout = (state) => state.ui;

export const getLoading = createSelector(
  getLayout,
  (state: State) => state.loading
);
export const getNotifications = createSelector(
  getLayout,
  (state: State) => state.notifications
);
