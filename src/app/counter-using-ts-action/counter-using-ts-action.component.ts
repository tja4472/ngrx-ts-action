import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  increment,
  decrement,
  reset,
  incrementWithPayload,
  incrementWithProps,
} from './counter-using-ts-action.actions';
import { State } from '../index';
import { getCount, getMessage } from './counter-using-ts-action.selectors';

@Component({
  selector: 'app-counter-using-ts-action',
  templateUrl: './counter-using-ts-action.component.html',
  styleUrls: ['./counter-using-ts-action.component.css'],
})
export class CounterUsingTsActionComponent {
  count$: Observable<number>;
  message$: Observable<string>;

  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select(getCount));
    this.message$ = store.pipe(select(getMessage));
  }

  increment() {
    this.store.dispatch(increment());
  }

  incrementByTwo() {
    this.store.dispatch(incrementWithPayload({ increment: 2 }));
  }

  incrementByThree() {
    this.store.dispatch(incrementWithProps({ increment: 3 }));
  }
  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
