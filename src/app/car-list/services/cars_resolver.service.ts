import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Car} from '../../model/car';
import {EMPTY, Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {CarState} from '../reducers/reducer';
import {mergeMap, skip, take} from 'rxjs/operators';
import {loadCars} from '../reducers/actions';

@Injectable({
  providedIn: 'root'
})
export class CarsResolverService implements Resolve<Car[]> {
  constructor(private store: Store<{ carsInfo: CarState }>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car[]> | Promise<Car[]> | Car[] {
    this.store.dispatch(loadCars());
    return this.store.select(data => data.carsInfo)
      .pipe(
        skip(1),
        take(1),
        mergeMap(info => {
          if (!!info.error) {
            return EMPTY;
          }

          if (info.cars) {
            return of(info.cars);
          } else {
            return EMPTY;
          }
        })
      );
  }
}
