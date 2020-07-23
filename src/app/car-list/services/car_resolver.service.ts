import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Car} from '../../model/car';
import {EMPTY, Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {CarState} from '../reducers/reducer';
import {mergeMap, skip, take} from 'rxjs/operators';
import {loadCar} from '../reducers/actions';

@Injectable({
  providedIn: 'root'
})
export class CarResolverService implements Resolve<Car> {
  constructor(private store: Store<{ carsInfo: CarState }>, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car> | Promise<Car> | Car {
    this.store.dispatch(loadCar({
      id: parseInt(route.paramMap.get('id'), 10)
    }));
    return this.store.select(data => data.carsInfo)
      .pipe(
        skip(1),
        take(1),
        mergeMap(info => {
          if (info.carDetail) {
            return of(info.carDetail);
          } else {
            this.router.navigate(['']);
            return EMPTY;
          }
        })
      );
  }
}
