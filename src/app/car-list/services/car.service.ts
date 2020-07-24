import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Car} from '../../model/car';
import {Observable} from 'rxjs';

@Injectable()
export class CarService {
  static readonly DATA_URL = 'http://localhost:3000/items';
  static readonly CAR_URL = 'http://localhost:3000/items?_start={start}&_end={end}';

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(CarService.DATA_URL);
  }

  get(id: number): Observable<HttpResponse<Car>> {
    const url = CarService.CAR_URL.replace('{start}', (id - 1).toString())
      .replace('{end}', id.toString());
    return this.http.get<Car>(url, {observe: 'response'});
  }
}
