import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromCounterUsingActionCreator from './counter-using-action-creator/counter-using-action-creator.reducer';
import * as fromCounterUsingClasses from './counter-using-classes/counter-using-classes.reducer';
import * as fromCounterUsingTsAction from './counter-using-ts-action/counter-using-ts-action.reducer';

export interface State {
  counterUsingActionCreator: fromCounterUsingActionCreator.State;
  counterUsingClasses: fromCounterUsingClasses.State;
  counterUsingTsAction: fromCounterUsingTsAction.State;
}

export const reducers: ActionReducerMap<State> = {
  counterUsingActionCreator: fromCounterUsingActionCreator.counterReducer,
  counterUsingClasses: fromCounterUsingClasses.counterReducer,
  counterUsingTsAction: fromCounterUsingTsAction.counterReducer,
};

export const getCounterUsingActionCreatorState = createFeatureSelector<
  State,
  fromCounterUsingActionCreator.State
>('counterUsingActionCreator');

export const getCounterUsingClassesState = createFeatureSelector<
  State,
  fromCounterUsingClasses.State
>('counterUsingClasses');

export const getCounterUsingTsActionState = createFeatureSelector<
  State,
  fromCounterUsingClasses.State
>('counterUsingTsAction');
