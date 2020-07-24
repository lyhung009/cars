import {Car} from '../../model/car';
import {Action, createReducer, on} from '@ngrx/store';
import {loadCarsSuccessfully, loadCarSuccessfully} from './actions';

export interface CarState {
  cars: Car[];
  carDetail: Car;
  total: number;
}

export const initialState: CarState = {
  cars: [],
  carDetail: null,
  total: 0
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
  })
);

export function reducer(state: CarState | undefined, action: Action): any {
  return carReducer(state, action);
}
