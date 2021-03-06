import { Action } from '@ngrx/store';

import {
  CounterUsingClassesActionTypes,
  CounterUsingClassesActionsUnion,
} from './counter-using-classes.actions';

export interface State {
  count: number;
  message: string;
}

export const initialState: State = {
  count: 0,
  message: '',
};

export function counterReducer(state = initialState, action: Action): State {
  //
  // ActionReducerMap compilation error when strictFunctionTypes is enabled in tsconfig
  // https://github.com/ngrx/platform/issues/951
  const reducerAction = action as CounterUsingClassesActionsUnion;

  switch (reducerAction.type) {
    case CounterUsingClassesActionTypes.Increment: {
      return { ...state, count: state.count + 1 };
    }

    case CounterUsingClassesActionTypes.IncrementWithPayload: {
      return {
        ...state,
        count: state.count + reducerAction.payload.increment,
      };
    }

    case CounterUsingClassesActionTypes.IncrementWithProps: {
      return { ...state, count: state.count + reducerAction.increment };
    }

    case CounterUsingClassesActionTypes.Decrement: {
      return { ...state, count: state.count - 1 };
    }

    case CounterUsingClassesActionTypes.Reset: {
      return { ...state, count: 0 };
    }

    case CounterUsingClassesActionTypes.SetMessage: {
      return { ...state, message: reducerAction.payload.message };
    }

    default:
      return state;
  }
}

export const getCount = (state: State) => state.count;
export const getMessage = (state: State) => state.message;
