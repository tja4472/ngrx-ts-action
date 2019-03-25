import { action, payload, union, props } from 'ts-action';

export const increment = action('[Counter Using ts-action] Increment');

export const incrementWithPayload = action(
  '[Counter Using ts-action] Increment With Payload',
  payload<{ increment: number }>()
);

export const incrementWithProps = action(
  '[Counter Using ts-action] Increment With Props',
  props<{ increment: number }>()
);

export const decrement = action('[Counter Using ts-action] Decrement');

export const reset = action('[Counter Using ts-action] Reset');

export const setMessage = action(
  '[Counter Using ts-action] Set Message',
  payload<{ message: string }>()
);
