import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../../model/car';
import {Observable} from 'rxjs';

@Injectable()
export class CarService {
  static readonly DATA_URL = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(CarService.DATA_URL);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(CarService.DATA_URL + '/' + id);
  }
}
