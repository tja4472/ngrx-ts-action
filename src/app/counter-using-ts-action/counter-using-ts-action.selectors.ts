import { createSelector } from '@ngrx/store';

import { getCounterUsingTsActionState } from '..';
import * as fromReducer from './counter-using-ts-action.reducer';

export const getCount = createSelector(
  getCounterUsingTsActionState,
  fromReducer.getCount
);

export const getMessage = createSelector(
  getCounterUsingTsActionState,
  fromReducer.getMessage
);
