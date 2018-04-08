import {Action} from '@ngrx/store';

export enum CoreActionTypes {
  ShowLoader = '[Ui] Show loader',
  HideLoader = '[Ui] Hide loader',
  ShowNotification = '[Ui] Show Notification',
  HideNotification = '[Ui] Hide Notification',
}

interface CoreAction extends Action {
  payload?: any;
}

export class ShowLoader implements CoreAction {
  readonly type = CoreActionTypes.ShowLoader;
}

export class HideLoader implements CoreAction {
  readonly type = CoreActionTypes.HideLoader;
}

export class ShowNotification implements CoreAction {
  readonly type = CoreActionTypes.ShowNotification;

  constructor(public payload: string) {}
}

export class HideNotification implements CoreAction {
  readonly type = CoreActionTypes.HideNotification;
}

export type CoreActions = ShowLoader | HideLoader | ShowNotification | HideNotification;
