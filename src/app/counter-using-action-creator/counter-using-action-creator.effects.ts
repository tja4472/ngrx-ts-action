import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import {
  ActionCreatorActions,
  CounterUsingActionCreatorTypes,
} from './counter-using-action-creator.actions';

@Injectable()
export class CounterUsingActionCreatorEffects {
  @Effect()
  setMessage$ = this.actions$.pipe(
    ofType(CounterUsingActionCreatorTypes.Increment),
    map(() => {
      const message = 'Incremented by 1';
      return ActionCreatorActions.setMessage(message);
    })
  );

  @Effect()
  setMessagePayload$ = this.actions$.pipe(
    ofType(CounterUsingActionCreatorTypes.IncrementWithPayload),
    map((action) => action.payload.increment),
    map((incrementAmount) => {
      const message = 'Incremented by ' + incrementAmount;
      return ActionCreatorActions.setMessage(message);
    })
  );

  @Effect()
  setMessageProps$ = this.actions$.pipe(
    ofType(CounterUsingActionCreatorTypes.IncrementWithProps),
    map((action) => action.increment),
    map((incrementAmount) => {
      const message = 'Incremented by ' + incrementAmount;
      return ActionCreatorActions.setMessage(message);
    })
  );

  constructor(private actions$: Actions<ActionCreatorActions>) {}
}
