import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CarService} from '../services/car.service';
import {LOAD_CAR, LOAD_CARS} from '../common/constants';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {loadCarsSuccessfully, loadCarSuccessfully, loadFailed} from '../reducers/actions';

@Injectable()
export class CarEffect {
  constructor(private action$: Actions, private carService: CarService) {
  }

  loadCars$ = createEffect(() => this.action$.pipe(
    ofType(LOAD_CARS),
    switchMap(() => this.carService.getAll().pipe(
      map(cars => {
        const newCars = cars.data.allItems.map(item => {
          if (typeof item.id === 'string') {
            item.id = parseInt(item.id, 10);
          }
          return item;
        });
        return loadCarsSuccessfully({cars: newCars});
      }),
      catchError(() => {
        return of(loadFailed({error: 'Errors occurred when loading cars'}));
      })
    ))
  ));

  loadCar$ = createEffect(() => this.action$.pipe(
    ofType(LOAD_CAR),
    switchMap((data: { id: number }) => this.carService.get(data.id).pipe(
      map((resp) => {
        const newCars = resp.data.allItems.map(item => {
          if (typeof item.id === 'string') {
            item.id = parseInt(item.id, 10);
          }
          return item;
        });
        return loadCarSuccessfully({carDetail: newCars[0], total: 9});
      }),
      catchError(() => {
        return of(loadFailed({error: 'Errors occurred when loading car'}));
      })
    ))
  ));
}
