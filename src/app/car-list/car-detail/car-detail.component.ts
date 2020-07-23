import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../model/car';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import {faEnvelope, faPhoneAlt, faRoad} from '@fortawesome/free-solid-svg-icons';
import {Store} from '@ngrx/store';
import {CarState} from '../reducers/reducer';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  @Input() data: Car = {} as any;

  faCalendar = faCalendarAlt;
  faRoad = faRoad;
  faMail = faEnvelope;
  faCall = faPhoneAlt;

  times: number[] = [];

  constructor(private store: Store<{ carsInfo: CarState }>) {
    this.store.select(data => data.carsInfo)
      .subscribe(data => {
        this.data = data.carDetail;
        this.times = Array(this.data.imagesCount).fill(0).map((x, i) => i + 1);
      });
  }

  ngOnInit(): void {
  }

}
