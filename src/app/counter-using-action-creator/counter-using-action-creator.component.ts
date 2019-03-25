import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ActionCreatorActions } from './counter-using-action-creator.actions';
import { State } from '../index';
import { getCount, getMessage } from './counter-using-action-creator.selectors';

@Component({
  selector: 'app-counter-using-action-creator',
  templateUrl: './counter-using-action-creator.component.html',
  styleUrls: ['./counter-using-action-creator.component.css'],
})
export class CounterUsingActionCreatorComponent {
  count$: Observable<number>;
  message$: Observable<string>;

  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select(getCount));
    this.message$ = store.pipe(select(getMessage));
  }

  increment() {
    this.store.dispatch(ActionCreatorActions.increment());
  }

  incrementByTwo() {
    this.store.dispatch(ActionCreatorActions.incrementWithPayload(2));
  }

  incrementByThree() {
    this.store.dispatch(ActionCreatorActions.incrementWithProps(3));
  }
  decrement() {
    this.store.dispatch(ActionCreatorActions.decrement());
  }

  reset() {
    this.store.dispatch(ActionCreatorActions.reset());
  }
}
