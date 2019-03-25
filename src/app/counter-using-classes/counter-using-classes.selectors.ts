import { createSelector } from '@ngrx/store';

import { getCounterUsingClassesState } from '..';
import * as fromReducer from './counter-using-classes.reducer';

export const getCount = createSelector(
  getCounterUsingClassesState,
  fromReducer.getCount
);

export const getMessage = createSelector(
  getCounterUsingClassesState,
  fromReducer.getMessage
);
