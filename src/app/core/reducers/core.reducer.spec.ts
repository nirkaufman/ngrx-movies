import { layoutReducer, initialState } from './core.reducer';
import {ShowLoader} from '../actions/core.actions';

describe('Core Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = layoutReducer(initialState, action);

      expect(result).toBe(initialState);
    });

    it('should change the loader to true', () => {
      const action = new ShowLoader();
      const expectedState = {loading: true, notifications: []};

      const result = layoutReducer(initialState, action);

      expect(result).toEqual(expectedState);
    });

  });
});
