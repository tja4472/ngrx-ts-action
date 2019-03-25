import { createSelector } from '@ngrx/store';

import { getCounterUsingActionCreatorState } from '..';
import * as fromReducer from './counter-using-action-creator.reducer';

export const getCount = createSelector(
  getCounterUsingActionCreatorState,
  fromReducer.getCount
);

export const getMessage = createSelector(
  getCounterUsingActionCreatorState,
  fromReducer.getMessage
);
