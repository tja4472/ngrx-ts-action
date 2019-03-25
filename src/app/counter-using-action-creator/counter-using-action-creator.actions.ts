import { ActionsUnion, createAction } from './action_creator';

export enum CounterUsingActionCreatorTypes {
  Increment = '[Counter Using action creator] Increment',
  IncrementWithPayload = '[Counter Using action creator] Increment With Payload',
  IncrementWithProps = '[Counter Using action creator] Increment With Props',
  Decrement = '[Counter Using action creator] Decrement',
  Reset = '[Counter Using action creator] Reset',
  SetMessage = '[Counter Using action creator] Set Message',
}

export const ActionCreatorActions = {
  increment: () => createAction(CounterUsingActionCreatorTypes.Increment),
  incrementWithPayload: (increment: number) =>
    createAction(CounterUsingActionCreatorTypes.IncrementWithPayload, {
      payload: { increment },
    }),
  incrementWithProps: (increment: number) =>
    createAction(CounterUsingActionCreatorTypes.IncrementWithProps, {
      increment,
    }),
  decrement: () => createAction(CounterUsingActionCreatorTypes.Decrement),
  reset: () => createAction(CounterUsingActionCreatorTypes.Reset),
  setMessage: (message: string) =>
    createAction(CounterUsingActionCreatorTypes.SetMessage, {
      message,
    }),
};

export type ActionCreatorActions = ActionsUnion<typeof ActionCreatorActions>;
