import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCore from '../core/reducers/core.reducer';
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {
  ui: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromCore.layoutReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
