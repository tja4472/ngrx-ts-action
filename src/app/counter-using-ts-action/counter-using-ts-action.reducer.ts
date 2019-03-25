import { union } from 'ts-action';
import { Action } from '@ngrx/store';

import {
  decrement,
  increment,
  reset,
  incrementWithPayload,
  incrementWithProps,
  setMessage,
} from './counter-using-ts-action.actions';

export interface State {
  count: number;
  message: string;
}

export const initialState: State = {
  count: 0,
  message: '',
};

export function counterReducer(state = initialState, action: Action): State {
  const actionsUsedInReducer = union({
    decrement,
    increment,
    incrementWithPayload,
    incrementWithProps,
    reset,
    setMessage,
  });

  const specificAction = action as typeof actionsUsedInReducer;

  switch (specificAction.type) {
    case increment.type:
      return { ...state, count: state.count + 1 };

    case incrementWithPayload.type:
      return {
        ...state,
        count: state.count + specificAction.payload.increment,
      };

    case incrementWithProps.type:
      return { ...state, count: state.count + specificAction.increment };

    case decrement.type:
      return { ...state, count: state.count - 1 };

    case reset.type:
      return { ...state, count: 0 };

    case setMessage.type:
      return { ...state, message: specificAction.payload.message };

    default:
      return state;
  }
}

export const getCount = (state: State) => state.count;
export const getMessage = (state: State) => state.message;
