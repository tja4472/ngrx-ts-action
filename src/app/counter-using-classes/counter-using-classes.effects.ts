import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import {
  CounterUsingClassesActionsUnion,
  CounterUsingClassesActionTypes,
  SetMessage,
} from './counter-using-classes.actions';

@Injectable()
export class CounterUsingClassesEffects {
  @Effect()
  setMessage$ = this.actions$.pipe(
    ofType(CounterUsingClassesActionTypes.Increment),
    map(() => {
      const message = 'Incremented by 1';
      return new SetMessage({ message });
    })
  );

  @Effect()
  setMessagePayload$ = this.actions$.pipe(
    ofType(CounterUsingClassesActionTypes.IncrementWithPayload),
    map((action) => action.payload.increment),
    map((incrementAmount) => {
      const message = 'Incremented by ' + incrementAmount;
      return new SetMessage({ message });
    })
  );

  @Effect()
  setMessageProps$ = this.actions$.pipe(
    ofType(CounterUsingClassesActionTypes.IncrementWithProps),
    map((action) => action.increment),
    map((incrementAmount) => {
      const message = 'Incremented by ' + incrementAmount;
      return new SetMessage({ message });
    })
  );

  constructor(private actions$: Actions<CounterUsingClassesActionsUnion>) {}
}
