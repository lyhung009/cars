import {createAction, props} from '@ngrx/store';
import {LOAD_CAR, LOAD_CAR_SUCCESSFULLY, LOAD_CARS, LOAD_CARS_SUCCESSFULLY, LOAD_FAILED} from '../common/constants';
import {Car} from '../../model/car';

export const loadCars = createAction(LOAD_CARS);
export const loadCarsSuccessfully = createAction(LOAD_CARS_SUCCESSFULLY, props<{ cars: Car[] }>());
export const loadCar = createAction(LOAD_CAR, props<{ id: number }>());
export const loadCarSuccessfully = createAction(LOAD_CAR_SUCCESSFULLY, props<{ carDetail: Car, total: number }>());
export const loadFailed = createAction(LOAD_FAILED, props<{ error: string }>());
