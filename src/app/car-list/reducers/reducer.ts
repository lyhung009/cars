import {Car} from '../../model/car';
import {Action, createReducer, on} from '@ngrx/store';
import {loadCarsSuccessfully, loadCarSuccessfully, loadFailed} from './actions';

export interface CarState {
  cars: Car[];
  carDetail: Car;
  total: number;
  error: string;
}

export const initialState: CarState = {
  cars: [],
  carDetail: null,
  total: 0,
  error: ''
};

const carReducer = createReducer(
  initialState,
  on(loadCarsSuccessfully, (state, {cars}) => ({
    ...state, cars
  })),
  on(loadCarSuccessfully, (state, {carDetail, total}) => {
    const equipment = carDetail.equipment.concat();
    equipment.sort();
    const newCar = {...carDetail, equipment};
    return {
      ...state, ...{carDetail: newCar}, ...{total}
    };
  }),
  on(loadFailed, (state, {error}) => ({
    ...state, error
  }))
);

export function reducer(state: CarState | undefined, action: Action): any {
  return carReducer(state, action);
}
