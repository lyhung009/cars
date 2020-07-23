import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CarService} from '../services/car.service';
import {LOAD_CAR, LOAD_CARS} from '../common/constants';
import {catchError, map, switchMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {loadCarsSuccessfully, loadCarSuccessfully} from '../reducers/actions';

@Injectable()
export class CarEffect {
  constructor(private action$: Actions, private carService: CarService) {
  }

  loadCars$ = createEffect(() => this.action$.pipe(
    ofType(LOAD_CARS),
    switchMap(() => this.carService.getAll().pipe(
      map(cars => (loadCarsSuccessfully({cars}))),
      catchError(() => EMPTY)
    ))
  ));

  loadCar$ = createEffect(() => this.action$.pipe(
    ofType(LOAD_CAR),
    switchMap((data: { id: number }) => this.carService.get(data.id).pipe(
      map(carDetail => (loadCarSuccessfully({carDetail}))),
      catchError(() => EMPTY)
    ))
  ));
}
