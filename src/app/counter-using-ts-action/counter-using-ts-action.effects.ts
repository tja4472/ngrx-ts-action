import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { union } from 'ts-action';

import {
  increment,
  setMessage,
  incrementWithPayload,
  incrementWithProps,
} from './counter-using-ts-action.actions';

const actionUnion = union({
  increment,
  incrementWithPayload,
  incrementWithProps,
  setMessage,
});

@Injectable()
export class CounterUsingTsActionEffects {
  @Effect()
  setMessage$ = this.actions$.pipe(
    ofType(increment.type),
    map(() => {
      const message = 'Incremented by 1';
      return setMessage({ message });
    })
  );

  @Effect()
  setMessagePayload$ = this.actions$.pipe(
    ofType(incrementWithPayload.type),
    map((action) => action.payload.increment),
    map((incrementAmount) => {
      const message = 'Incremented by ' + incrementAmount;
      return setMessage({ message });
    })
  );

  @Effect()
  setMessageProps$ = this.actions$.pipe(
    ofType(incrementWithProps.type),
    map((action) => action.increment),
    map((incrementAmount) => {
      const message = 'Incremented by ' + incrementAmount;
      return setMessage({ message });
    })
  );

  constructor(private actions$: Actions<typeof actionUnion>) {}
}
