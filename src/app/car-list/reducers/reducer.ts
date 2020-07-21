import {Car} from '../../model/car';
import {Action, createReducer, on} from '@ngrx/store';
import {loadCarsSuccessfully} from './actions';

export interface CarState {
  cars: Car[];
  carDetail: Car;
}

export const initialState: CarState = {
  cars: [],
  carDetail: null
};

const carReducer = createReducer(
  initialState,
  on(loadCarsSuccessfully, (state, {cars}) => ({
    ...state, cars
  }))
);

export function reducer(state: CarState | undefined, action: Action): any {
  return carReducer(state, action);
}
