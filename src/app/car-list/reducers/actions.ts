import {createAction, props} from '@ngrx/store';
import {LOAD_CARS, LOAD_CARS_FAILED, LOAD_CARS_SUCCESSFULLY} from '../common/constants';
import {Car} from '../../model/car';

export const loadCars = createAction(LOAD_CARS);
export const loadCarsSuccessfully = createAction(LOAD_CARS_SUCCESSFULLY, props<{ cars: Car[] }>());
export const loadCarsFailed = createAction(LOAD_CARS_FAILED);
