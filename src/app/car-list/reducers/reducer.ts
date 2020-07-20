import {Car} from '../../model/car';

export interface CarState {
  cars: Car[];
  carDetail: Car;
}

export const initialState: CarState = {
  cars: [],
  carDetail: null
};
