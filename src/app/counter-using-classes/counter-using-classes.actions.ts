import { Action } from '@ngrx/store';

export enum CounterUsingClassesActionTypes {
  Increment = '[Counter Using Classes] Increment',
  IncrementWithPayload = '[Counter Using Classes] Increment With Payload',
  IncrementWithProps = '[Counter Using Classes] Increment With Props',
  Decrement = '[Counter Using Classes] Decrement',
  Reset = '[Counter Using Classes] Reset',
  SetMessage = '[Counter Using Classes] Set Message',
}

export class Increment implements Action {
  readonly type = CounterUsingClassesActionTypes.Increment;
}

export class IncrementWithPayload implements Action {
  readonly type = CounterUsingClassesActionTypes.IncrementWithPayload;

  constructor(public payload: { increment: number }) {}
}

export class IncrementWithProps implements Action {
  readonly type = CounterUsingClassesActionTypes.IncrementWithProps;

  constructor(public increment: number) {}
}

export class Decrement implements Action {
  readonly type = CounterUsingClassesActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = CounterUsingClassesActionTypes.Reset;
}

export class SetMessage implements Action {
  readonly type = CounterUsingClassesActionTypes.SetMessage;

  constructor(public payload: { message: string }) {}
}

export type CounterUsingClassesActionsUnion =
  | Increment
  | IncrementWithPayload
  | IncrementWithProps
  | Decrement
  | Reset
  | SetMessage;
