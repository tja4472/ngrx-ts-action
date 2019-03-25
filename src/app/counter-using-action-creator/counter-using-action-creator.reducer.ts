import { Action } from '@ngrx/store';

import {
  ActionCreatorActions,
  CounterUsingActionCreatorTypes,
} from './counter-using-action-creator.actions';

export interface State {
  count: number;
  message: string;
}

export const initialState: State = {
  count: 0,
  message: '',
};

export function counterReducer(state = initialState, action: Action): State {
  const specificAction = action as ActionCreatorActions;

  switch (specificAction.type) {
    case CounterUsingActionCreatorTypes.Increment:
      return { ...state, count: state.count + 1 };

    case CounterUsingActionCreatorTypes.IncrementWithPayload:
      return {
        ...state,
        count: state.count + specificAction.payload.increment,
      };

    case CounterUsingActionCreatorTypes.IncrementWithProps:
      return { ...state, count: state.count + specificAction.increment };

    case CounterUsingActionCreatorTypes.Decrement:
      return { ...state, count: state.count - 1 };

    case CounterUsingActionCreatorTypes.Reset:
      return { ...state, count: 0 };

    case CounterUsingActionCreatorTypes.SetMessage:
      return { ...state, message: specificAction.message };

    default:
      return state;
  }
}

export const getCount = (state: State) => state.count;
export const getMessage = (state: State) => state.message;
