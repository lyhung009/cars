import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CarService} from '../services/car.service';
import {LOAD_CAR, LOAD_CARS} from '../common/constants';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {loadCarsSuccessfully, loadCarSuccessfully, loadFailed} from '../reducers/actions';
import {HttpResponse} from '@angular/common/http';
import {Car} from '../../model/car';

@Injectable()
export class CarEffect {
  constructor(private action$: Actions, private carService: CarService) {
  }

  loadCars$ = createEffect(() => this.action$.pipe(
    ofType(LOAD_CARS),
    switchMap(() => this.carService.getAll().pipe(
      map(cars => (loadCarsSuccessfully({cars}))),
      catchError(() => {
        return of(loadFailed({error: 'Errors occurred when loading cars'}));
      })
    ))
  ));

  loadCar$ = createEffect(() => this.action$.pipe(
    ofType(LOAD_CAR),
    switchMap((data: { id: number }) => this.carService.get(data.id).pipe(
      map((resp: HttpResponse<Car>) => {
        const total = resp.headers.get('X-Total-Count');
        return loadCarSuccessfully({carDetail: resp.body[0], total: parseInt(total, 10)});
      }),
      catchError(() => {
        return of(loadFailed({error: 'Errors occurred when loading car'}));
      })
    ))
  ));
}
