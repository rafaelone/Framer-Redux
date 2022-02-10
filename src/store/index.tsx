import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { Pizza } from './pizza/reducer';
import { Denis } from './denis/reducer';

export const reducers = combineReducers({
  pizzaReducer: Pizza,
  denisReducer: Denis,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
