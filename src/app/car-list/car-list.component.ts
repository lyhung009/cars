import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {CarState} from './reducers/reducer';
import {Car} from '../model/car';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {faFilter} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {

  cars: Car[] = [];

  faFilter = faFilter;

  constructor(private store: Store<{ carsInfo: CarState }>, private modalService: NgbModal) {
    this.store.select(data => data.carsInfo)
      .subscribe(data => {
        this.cars = data.cars;
      });
  }

  openFilterModal(content): void {
    this.modalService.open(content);
  }
}
