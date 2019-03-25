import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Increment,
  IncrementWithPayload,
  IncrementWithProps,
  Decrement,
  Reset,
} from './counter-using-classes.actions';
import { State } from '../index';
import { getCount, getMessage } from './counter-using-classes.selectors';

@Component({
  selector: 'app-counter-using-classes',
  templateUrl: './counter-using-classes.component.html',
  styleUrls: ['./counter-using-classes.component.css'],
})
export class CounterUsingClassesComponent {
  count$: Observable<number>;
  message$: Observable<string>;

  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select(getCount));
    this.message$ = store.pipe(select(getMessage));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  incrementByTwo() {
    this.store.dispatch(new IncrementWithPayload({ increment: 2 }));
  }

  incrementByThree() {
    this.store.dispatch(new IncrementWithProps(3));
  }
  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
