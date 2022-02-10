import * as types from './types';

type Action = {
  type: string;
  base: string;
  topping: string;
};

type PizzaReducer = {
  base: string;
  toppings: string[];
};

export const INITIAL_STATE: PizzaReducer = {
  base: '',
  toppings: [],
};

export function Pizza(state = INITIAL_STATE, action: Action): PizzaReducer {
  switch (action.type) {
    case types.ADD_PIZZA: {
      return {
        ...state,
        base: action.base,
      };
    }
    case types.ADD_TOPPINGS: {
      const newToppings = !state.toppings.includes(action.topping)
        ? [...state.toppings, action.topping]
        : state.toppings.filter((topping) => topping !== action.topping);

      return {
        ...state,
        toppings: newToppings,
      };
    }
    default:
      return state;
  }
}
