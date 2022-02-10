import { Dispatch } from 'redux';

import * as types from './types';

export const AddBase =
  (base: string) =>
  (dispatch: Dispatch): void => {
    dispatch({
      type: types.ADD_PIZZA,
      base,
    });
  };

export const AddToppings =
  (topping: string) =>
  (dispatch: Dispatch): void => {
    dispatch({
      type: types.ADD_TOPPINGS,
      topping,
    });
  };
